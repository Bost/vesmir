#lang racket

(provide
 (all-defined-out))

#|
(require (for-syntax racket/match))

(define-syntax (elapsed-time stx)
  (match (syntax->list stx)
    [(list _ stx-expr)
     (datum->syntax stx
                    `(let* [(beg (current-inexact-milliseconds))
                            (expr-val ,stx-expr)
                            (end (current-inexact-milliseconds))]
                           (printf "Elapsed time: ~a msecs\n~a\n"
                                   (- end beg) expr-val)))]))
|#

(define-syntax (time stx)
  (syntax-case stx ()
    [(_ stx-expr)
     #'(let* [(beg (current-inexact-milliseconds))
              (expr-val stx-expr)
              (end (current-inexact-milliseconds))]
         (begin
           (printf "Elapsed time: ~a msecs\n" (- end beg))
           expr-val))]))

(define (count coll)
  "TODO look if somebody have made something better. E.g. in rackjure"
  ((cond
    [(hash? coll) hash-count]
    [(list? coll) length]
    [else (error "coll must be a hash-table or a list")])
   coll))

(require racket/undefined)
(define (type x)
  "Try to find out what's the type the input `x'."
  (cond [(number? x) "number"]
        [(pair? x) "pair"]
        [(string? x) "string"]
        ;; TODO byte? for byte string
        [(list? x) "list"]
        ;; Usage: (type '#:a); (type #:a) doesn't work
        [(keyword? x) "keyword"]
        [(vector? x) "vector"]
        [(symbol? x) "symbol"]
        [(set? x) "set"]
        [else undefined]))

(require (prefix-in racket: racket))
(define (take n coll)
  "TODO should respect the coll-type"
  (cond
    [(> n (length coll)) coll]
    [(< n 0) '()]
    [else (racket:take coll n)]))

;; Usage
#;(require racket/sequence)
#;(time (sequence-fold + 0 (in-range #e1e7)))
