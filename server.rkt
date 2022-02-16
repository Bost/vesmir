#lang racket

;; See https://defn.io/2020/02/12/racket-web-server-guide/

(require
 (prefix-in f: "files.rkt")
 racket/function
 web-server/servlet
 web-server/servlet-env
 web-server/http
 racket/runtime-path
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

(define (css-dir path) (string-append "static/" path))
(define (js-dir path) (string-append "js-build/modules/" path))

(define (response/template . content)
  (response/xexpr
   `(html
     (head
      (link ([href "/screen.css"] [type "text/css"] [rel "stylesheet"])))
     (body
      ,@content))))

(define (homepage req)
  (response/template
   `(div
     ;; (p (a ([target "_blank"] [href "/martin"]) ,f:martin-dir))
     ;; (p (a ([target "_blank"] [href "/krivan"]) ,f:krivan-dir))
     ;; (p (a ([target "_blank"] [href "/wumpus"]) "wumpus"))
     (p (a ([target "_blank"] [href "/tetris"]) "tetris")))))

(define (martin req)
  (response/template
   `(div
     ,@(map (curry html-tag f:martin-dir) f:files-martin))))

(define (krivan req)
  (response/template
   `(div
     ,@(map (curry html-tag f:krivan-dir) f:files-krivan))))

;; TODO siehe https://github.com/lexi-lambda/litpub/blob/2f326c1c0e/util/jsexpr.rkt
(define (wumpus req)
  (response/xexpr
   `(html
     (head
      #;(meta ([charset "utf-8"]))
      (meta ([http-equiv "content-type"] [content "text/html; charset=utf-8"]))
      (script ([src "https://code.jquery.com/jquery-3.1.0.min.js"]
               [integrity "sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="]
               [crossorigin "anonymous"]))
      (script ([src ,(js-dir "wumpus.rkt.js")] [type "module"]))
      (link ([href ,(css-dir "screen.css")] [type "text/css"] [rel "stylesheet"])))
     #;(body "wumpus"))))

(define (tetris req)
  (response/xexpr
   `(html
     (head
      #;(meta ([charset "utf-8"]))
      (meta ([http-equiv "content-type"] [content "text/html; charset=utf-8"]))
      (script ([src "https://code.jquery.com/jquery-3.1.0.min.js"]
               [integrity "sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="]
               [crossorigin "anonymous"]))
      (script ([src ,(js-dir "tetris.rkt.js")] [type "module"]))
      (link ([href ,(css-dir "screen.css")] [type "text/css"] [rel "stylesheet"])))
     #;(body "tetris"))))

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
   [("") tetris]
   ;; [("martin") martin]
   ;; [("krivan") krivan]
   [("wumpus")  wumpus]
   [("tetris") tetris]
   ;; Don’t include an `else` if serving any static files, otherwise filesystem
   ;; server will never see the requests.
   #;[else (error "Route does not exist:" req)]))

;; on Heroku, the printf strings will be displayed only after(!) shutting down
;; the app: heroku ps:scale web=0 --app $APP

;; (define-runtime-path-list static-files-root '("./"))
(define static-files-root (list root-path))
(printf "[printf] static-files-root ~a\n" static-files-root)

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
 #:servlet-path ""    ; initial to show in browser
 #:listen-ip #f
 ;; capture top-level requests
 #:servlet-regexp #rx""
 ;; use serve/servlet in a start up script for a Web application, and don’t open
 ;; browser and don't print the DrRacket banner:
 #:command-line? #t
 #:extra-files-paths static-files-root
 #:file-not-found-responder not-found
 )
