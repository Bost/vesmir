#lang racket

;; See https://defn.io/2020/02/12/racket-web-server-guide/

(require net/url
         xml          ;; for make-cdata
         response-ext ;; for response/file
         (prefix-in f: "files.rkt")
         racket/function
         web-server/dispatch
         web-server/servlet
         web-server/servlet-env
         (prefix-in files: web-server/dispatchers/dispatch-files)
         (prefix-in filter: web-server/dispatchers/dispatch-filter)
         (prefix-in sequencer: web-server/dispatchers/dispatch-sequencer)
         web-server/dispatchers/filesystem-map
         web-server/http
         web-server/servlet-dispatch
         web-server/web-server
         web-server/configuration/responders
         )

(define gpath "static/gallery")

(define (picture index total-count picture-name)
  `(div ([class "mySlides"])
       (div ([class "numbertext"]) ,(format "~a / ~a" index total-count))
       (img ([src ,(string-append gpath "/" picture-name)]
             [style "width:100%"]))))

(define (thumbnail picture-name index desc)
  `(div ([class "column"])
       (img ([class "demo cursor"]
             [src ,(string-append gpath "/" picture-name)]
             [style "width:100%"]
             [onclick ,(format "currentSlide(~a)" index)]
             [alt ,desc]))))

(define (response/gallery-template . content)
  (response/xexpr
   #:preamble #"<!DOCTYPE html>"
   `(html
     (head
      (meta ([charset "utf-8"]))
      (meta ([name "viewport"] [content "width=device-width, initial-scale=1"]))
      (link ([rel "stylesheet"] [href ,(string-append gpath "/style.css")])))

     (body
      (h2 ([style "text-align:center"]) "Slideshow Gallery")
      (div ([class "container"])
           ,@(let* [(images f:files-gallery-wide)
                    (count-images (length images))]
               (map (lambda (i n) (picture i count-images n))
                    (range 1 (+ 1 count-images))
                    images))

           (a ([class "prev"] [onclick "plusSlides(-1)"]) "❮")
           (a ([class "next"] [onclick "plusSlides(1)"]) "❯")
           (div ([class "caption-container"])
                (p ([id "caption"])))

           (div ([class "row"])
                ,@(let* [(images f:files-gallery)
                         (count-images (length images))
                         (descs (make-list count-images ""))]
                    (map thumbnail
                         images
                         (range 1 (+ 1 count-images))
                         descs))))
      #;
      (script
       ([type "text/javascript"])
       ,(make-cdata
         #f #f
         "console.log('(1 > 2)', (1 > 2), '(1 < 2)', (1 < 2));"))

      (script ([type "text/javascript"]
               [src ,(string-append gpath "/script.js")]))))))

(define (gallery _)
  (response/gallery-template
   `(div
     ;; ,@(map (curry html-tag f:krivan-dir) f:files-gallery)
     ))
  )

(define aws-s3 "https://vesmir.s3.eu-central-1.amazonaws.com")

(define (html-tag dir fpath)
  (let* ([path (string-append aws-s3 "/" dir)]
         [full-fpath (string-append path "/" fpath)]
         [thumb-fpath (string-append path "/" "thumbs/" fpath)]
         [href (list 'href full-fpath)]
         [src (list 'src thumb-fpath)]
         [a-attrs (list '[target "_blank"] href)]
         [img-attrs (list src)]
         [img (list 'img img-attrs)]
         [a (list 'a a-attrs img)])
    a))

(define (response/template . content)
  (response/xexpr
   `(html
     (head
      (link ([href "/screen.css"] [type "text/css"] [rel "stylesheet"])))
     (body ,@content))))

(define (homepage _)
  (response/gallery-template
   `(div "homepage"))
  #;
  (response/template
   `(div
     (p (a ([target "_blank"] [href "/martin-zts"]) ,f:martin-zts-dir))
     (p (a ([target "_blank"] [href "/kremnica"]) ,f:kremnica-dir))
     (p (a ([target "_blank"] [href "/martin"]) ,f:martin-dir))
     (p (a ([target "_blank"] [href "/krivan"]) ,f:krivan-dir)))))

#|
;; create a macro out of response-fun
(define (response-fun dir files)
  (lambda (req)
    (response/template
     `(div
       ,@(map (curry html-tag dir) files)))))

(define-values (dispatch req)
  (dispatch-rules
   [("")           #:method "get" homepage]
   [("kremnica")   #:method "get" (response-fun f:kremnica-dir f:files-kremnica)]
   [("martin")     #:method "get" (response-fun f:martin-dir   f:files-martin)]
   [("krivan")     #:method "get" (response-fun f:krivan-dir   f:files-krivan)]
   ;; serving static content - see https://stackoverflow.com/q/37846248
   [("screen.css") #:method "get" (lambda (_)
                                    (file-response 200 #"OK"
                                                   (string-append
                                                    root-path
                                                    "static/screen.css")))]
   [else (error "Route does not exist")]))
|#

(define (martin-zts _)
  (response/template
   `(div
     ,@(map (curry html-tag f:martin-zts-dir) f:files-martin-zts))))

(define (kremnica _)
  (response/template
   `(div
     ,@(map (curry html-tag f:kremnica-dir) f:files-kremnica))))

(define (martin _)
  (response/template
   `(div
     ,@(map (curry html-tag f:martin-dir) f:files-martin))))

(define (krivan _)
  (response/template
   `(div
     ,@(map (curry html-tag f:krivan-dir) f:files-krivan))))

(define (not-found _)
  (response/template '(h1 "Not Found")))

(define url->path/static (make-url->path "static"))

(define static-dispatcher
  (files:make #:url->path (lambda (u)
                            (url->path/static
                             (struct-copy url u [path (cdr (url-path u))])))))

;; the '/app/app/' is set by the buildpack
;; See:
;; https://github.com/lexi-lambda/heroku-buildpack-racket/blob/master/README.md#running
;; `heroku run bash`
(define root-path
  (if (getenv "RUNTIME_ENV")
      "/app/app/"
      (path->string (current-directory))))

;; log-info doesn't work
#;(log-info "[log-info] root-path: ~a\n" root-path)
;; TODO root-path on heroku is just '/app/' WTF?
(printf "[printf] root-path: ~a\n" root-path)


(define-values (dispatch req)
  (dispatch-rules
   [("")       #:method "get" homepage]
   [("martin-zts") #:method "get" martin-zts]
   [("kremnica") #:method "get" kremnica]
   [("martin") #:method "get" martin]
   [("krivan") #:method "get" krivan]
   [("static" (string-arg) (string-arg))
    #:method "get"
    (lambda (_ g f)
      #;(printf "[printf] g: ~a, f: ~a\n" g f)
      (match f
        ["script.js"
         (begin
           #;(printf "[printf] script.js; g: ~a, f: ~a\n" g f)
           (response/file (string-append root-path "static/" g "/" f)
                          #"application/javascript; charset=utf-8"))]
        ["style.css"
         (begin
           #;(printf "[printf] style.css; g: ~a, f: ~a\n" g f)
           (response/file (string-append root-path "static/" g "/" f)
                          #"text/css; charset=utf-8"))]
        [_
         (file-response 200 #"OK"
                        (string-append root-path "static/" g "/" f))])
      )]
   ;; serving static content - see https://stackoverflow.com/q/37846248
   [("screen.css")
    #:method "get"
    (lambda (_)
      (file-response 200 #"OK"
                     (string-append root-path "static/screen.css")))]
   [else (error "Route does not exist")]))

(define port (if (getenv "PORT")
                 (string->number (getenv "PORT"))
                 8000))

(printf "[printf] port: ~a\n" port)

(serve/servlet
 (lambda (req) (dispatch req))
 ;; #:launch-browser? #f
 ;; do not quit when the URL is "/quit"
 ;; #:quit? #f
 #:port port
 #:servlet-path "/"
 #:server-root-path root-path
 #:listen-ip #f
 ;; capture top-level requests
 #:servlet-regexp #rx""
 ;; use serve/servlet in a start up script for a Web application, and don’t open
 ;; browser and don't print the DrRacket banner:
 #:command-line? #t
 )

#;(define stop
  (serve
   #:dispatch (sequencer:make
               (filter:make #rx"^/static/" static-dispatcher)
               (dispatch/servlet app)
               (dispatch/servlet not-found))
   #:listen-ip #f ;; "127.0.0.1"
   #:port port
   #:command-line? #t))

#;(with-handlers ([exn:break? (lambda (e)
                              (stop))])
  (sync/enable-break never-evt))

#;(serve/servlet
 static-dispatcher
 #:listen-ip "127.0.0.1"
 #:port 8000
 #:command-line? #t
 #:servlet-path ""
 #:servlet-regexp #rx"")
