#lang racket

;; See https://defn.io/2020/02/12/racket-web-server-guide/

(require
 web-server/servlet
 web-server/servlet-env
 web-server/http
 racket/runtime-path
 )

(define-runtime-path-list static-files-root '("./"))
(printf "[printf] static-files-root ~a\n" static-files-root)

(define (homepage req)
  (response/xexpr
   `(html
     (head
      (meta ([http-equiv "content-type"] [content "text/html; charset=utf-8"]))
      (script ([src "https://code.jquery.com/jquery-3.1.0.min.js"]
               [integrity "sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="]
               [crossorigin "anonymous"]))
      ;; the src, href, etc. filepaths are relative to static-files-root
      (script ([src "js-build/modules/overview.rkt.js"] [type "module"]))
      (link ([href "static/screen.css"] [rel "stylesheet"] [type "text/css"])))
     (body "This text must be red"))))

(define-values (dispatch req)
  (dispatch-rules
   [("") homepage]
   ;; Don’t include an `else` if serving any static files, otherwise filesystem
   ;; server will never see the requests.
   #;[else (error "Route does not exist:" req)]))

(serve/servlet
 (lambda (req) (dispatch req))
 #:port              8000
 #:launch-browser?   #f
 #:servlet-path      ""    ; initial to show in browser
 #:servlet-regexp    #rx""
 #:extra-files-paths static-files-root)

