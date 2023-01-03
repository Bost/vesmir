#lang racket

;; See https://defn.io/2020/02/12/racket-web-server-guide/

(require
 response-ext ;; for response/file
 web-server/servlet
 web-server/servlet-env
 web-server/http
 web-server/configuration/responders
 )

(define (response/template . content)
  (response/xexpr
   `(html
     (head
      (link ([href "/screen.css"] [type "text/css"] [rel "stylesheet"])))
     (body ,@content))))

(define (homepage _)
  (response/template
   `(div
     (p (a ([target "_blank"]
            [href "/static/2022-08-23-Martin-ZTS-fgallery/index.html"])
           "2022-08-23-Martin-ZTS"))
     (p (a ([target "_blank"]
            [href "/static/2022-08-25-Kremnica-fgallery/index.html"])
           "2022-08-25-Kremnica"))
     (p (a ([target "_blank"]
            [href "/static/2021-12-01_Martin-fgallery/index.html"])
           "2021-12-01_Martin"))
     (p (a ([target "_blank"]
            [href "/static/2019-08-Krivan-fgallery/index.html"])
           "2019-08-Krivan")))))

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
   [("") #:method "get" homepage]
   [("static" (string-arg) ...)
    #:method "get"
    (lambda (_ args)
      #;(printf "[printf] args: ~a\n" args)
      (match (last args)
        [(regexp #rx".*\\.js$")
         (begin
           #;(printf "[js] ~a\n" args)
           (response/file (string-append root-path "static/"
                                         (string-join args "/"))
                          #"application/javascript; charset=utf-8"))]
        [(regexp #rx".*\\.css$")
         (begin
           #;(printf "[css] ~a\n" args)
           (response/file (string-append root-path "static/"
                                         (string-join args "/"))
                          #"text/css; charset=utf-8"))]
        [_
         (file-response 200 #"OK"
                        (string-append root-path "static/"
                                       (string-join args "/")))])
      )]
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

