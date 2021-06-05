#lang racket

(require
 (prefix-in r: racket))

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
  ((cond
     [(hash? coll) hash-count]
     [(list? coll) length]
     [else (error "coll must be a hash-table or a list")])
   coll))

(define (take n coll)
  (if (> n (length coll))
      coll
      (r:take coll n)))

;; Usage
#;(require racket/sequence)
#;(time (sequence-fold + 0 (in-range #e1e7)))

