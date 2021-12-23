#lang racket

;; See Alexis King's & the forks
;; https://github.com/lexi-lambda/racket-sample-heroku-app

;; Luis Quintanilla: Building Web Services with Racket
;; https://youtu.be/ZvwE6_MMJjM
;; https://github.com/lqdev/Presentations/tree/master/Reactor022021-Racket-Web-Services
(require json)
(require web-server/servlet)
(require web-server/servlet-env)

;;; Convert raw request body to jsexrp
(define (parse-json-body req)
  (bytes->jsexpr (request-post-data/raw req)))

;;; Function to get value from hash given a key
(define (get-hash-value h v)
  (hash-ref h v))

(define port (if (getenv "PORT")
                 (string->number (getenv "PORT"))
                 8080))

;;; Define handlers
(define (get-values req)
  (response/jsexpr
   (hasheq
    'values '(1 2 3)
    'ITA (hasheq
          'dates '(4 5 6)))))

(define (post-values req)
  (define get-property
    (curry get-hash-value (parse-json-body req)))

  (define x (string->number (get-property 'x)))
  (define y (string->number (get-property 'y)))

  (response/jsexpr
   (hasheq 'sum (+ x y))))

;;; Define router
(define-values (dispatch req)
  (dispatch-rules
   [("values") #:method "get" get-values]
   [("values") #:method "post" post-values]
   [else (error "Route does not exist")]))

;; Define and start server
(serve/servlet
 (lambda (req) (dispatch req))
 ;; #:launch-browser? #f
 ;; do not quit when the URL is "/quit"
 ;; #:quit? #f
 #:port port
 #:servlet-path "/"
 #:listen-ip #f
 ;; capture top-level requests
 #:servlet-regexp #rx""
 ;; use serve/servlet in a start up script for a Web application, and don’t open
 ;; browser and don't print the DrRacket banner:
 #:command-line? #t
 )
