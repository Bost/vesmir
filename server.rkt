#lang racket

;; See https://defn.io/2020/02/12/racket-web-server-guide/

(require net/url
         (prefix-in f: "files.rkt")
         racket/function
         racket/runtime-path
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

(define (static-url path) (string-append "/static/" path))
(define (js-url path) (string-append "/js-build/" path))

(define (response/template . content)
  (response/xexpr
   `(html
     (head
      (link ([href "/screen.css"] [type "text/css"] [rel "stylesheet"])))
     (body
      ,@content))))

;; TODO siehe https://github.com/lexi-lambda/litpub/blob/2f326c1c0e/util/jsexpr.rkt
(define (response/template-wumpus . content)
  (response/xexpr
   `(html
     (head
      (meta ([charset "utf-8"]))
      (meta ([http-equiv "content-type"] [content
                                          "charset=utf-8"
                                          #;"text/html; charset=utf-8"]))
      (script ([src "https://code.jquery.com/jquery-3.1.0.min.js"]
               [integrity "sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="]
               [crossorigin "anonymous"]))
      #;(script ([src "/wumpus.rkt.js"] [type "module"]))
      (script ([src ,(js-url "tetris.rkt.js")] [type
                                                "text/javascript"
                                                #;"module"]))
      #;(script ([src "/stub.rkt.js"] [type "module"]))
      #;(script ([src "/overview.rkt.js"] [type "module"]))
      #;(script ([src "/2048-game.rkt.js"] [type "module"]))
      #;(script ([src "/archery.rkt.js"] [type "module"]))
      (link ([href ,(static-url "screen.css")] [type "text/css"] [rel "stylesheet"])))
     (body
      ,@content))))

(define (homepage req)
  (response/template
   `(div
     (p (a ([target "_blank"] [href "/martin"]) ,f:martin-dir))
     (p (a ([target "_blank"] [href "/krivan"]) ,f:krivan-dir))
     (p (a ([target "_blank"] [href "/racket"]) "racket")))))

(define (martin req)
  (response/template
   `(div
     ,@(map (curry html-tag f:martin-dir) f:files-martin))))

(define (krivan req)
  (response/template
   `(div
     ,@(map (curry html-tag f:krivan-dir) f:files-krivan))))

(define (wumpus req)
  (response/template-wumpus
   ;; TEXT/HTML-MIME-TYPE
   `(div "wumpus")))

(define (not-found req)
  (response/template '(h1 "Not Found")))

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
;; (printf "[printf] root-path: ~a\n" root-path)

(define-values (dispatch req)
  (dispatch-rules
   [("")       #:method "get" homepage]
   ;; [("js-build") #:method "get" js-build]
   [("martin") #:method "get" martin]
   [("krivan") #:method "get" krivan]
   [("racket") #:method "get" wumpus]
   ;; Don’t include an `else` in the dispatch-rules if serving static files, or
   ;; else the filesystem server will never see the requests.
   #;[else (error "Route does not exist.")]))

(define-runtime-path-list public-paths '("js-build" "static"))
(printf "[printf] public-paths: ~a\n" public-paths)

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
 ;; #:server-root-path root-path
 #:listen-ip #f
 ;; capture top-level requests
 #:servlet-regexp #rx""
 ;; use serve/servlet in a start up script for a Web application, and don’t open
 ;; browser and don't print the DrRacket banner:
 #:command-line? #t
 #:extra-files-paths public-paths
 #:file-not-found-responder not-found
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
