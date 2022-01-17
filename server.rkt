#lang racket

;; See https://defn.io/2020/02/12/racket-web-server-guide/

(require
 web-server/servlet
 web-server/servlet-env
 web-server/http
 web-server/configuration/responders
 )

(define (homepage req)
  ;; (printf "[printf] req: ~a\n" req)
  (response/xexpr
   `(html
     (head
      (meta ([http-equiv "content-type"] [content "text/html; charset=utf-8"]))
      (script ([src "https://code.jquery.com/jquery-3.1.0.min.js"]
               [integrity "sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="]
               [crossorigin "anonymous"]))
      (script ([src "overview.rkt.js"]
               ;; in Firefox  - ERR: Loading module from “http://localhost:8000/overview.rkt.js” was blocked because of a disallowed MIME type (“text/html”).
               ;; in Chromium - ERR: Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.
               [type "module"]

               ;; in Firefox  - WRN: The script from “http://localhost:8000/overview.rkt.js” was loaded even though its MIME type (“text/html”) is not a valid JavaScript MIME type.
               ;;             - ERR: Uncaught SyntaxError: import declarations may only appear at top level of a module
               ;; in Chromium - ERR: Uncaught SyntaxError: Cannot use import statement outside a module
               #;[type "application/javascript"]
               ))
      (link ([href "screen.css"]
             [rel "stylesheet"]
             ;; in Chromium everything is fine
             ;; in Firefox - WRN: The stylesheet http://localhost:8000/screen.css was loaded as CSS even though its MIME type, “text/html”, is not “text/css”.
             [type "text/css"]
             )))
     (body "This text must be red"))))

(define server-root-path (path->string (current-directory)))
(printf "[printf] server-root-path: ~a\n" server-root-path)

(define-values (dispatch req)
  (dispatch-rules
   [("") #:method "get" homepage]
   ;; serving static content - see https://stackoverflow.com/q/37846248
   ;; "static/screen.css" doesn't work. Apparently slash '/' makes troubles
   [("screen.css")
    #:method "get"
    (λ (_)
      (file-response 200 #"OK"
                     (string-append
                      server-root-path
                      "static/screen.css")))]
   [("overview.rkt.js")
    #:method "get"
    (λ (_)
      (file-response 200 #"OK"
                     (string-append
                      server-root-path
                      "js-build/modules/overview.rkt.js")))]
   [else (error "Route does not exist:" req)]))

(serve/servlet
 (lambda (req) (dispatch req))
 ;; #:launch-browser? #f
 ;; do not quit when the URL is "/quit"
 ;; #:quit? #f
 #:port 8000
 #:servlet-path "/"
 #:server-root-path server-root-path
 #:listen-ip #f
 ;; capture top-level requests
 #:servlet-regexp #rx""
 ;; use serve/servlet in a start up script for a Web application, and don’t open
 ;; browser and don't print the DrRacket banner:
 #:command-line? #t
 )
