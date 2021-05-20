#lang racket

(provide time)

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
       (printf "Elapsed time: ~a msecs\n~a\n"
               (- end beg) expr-val))]))


;; Usage
#;(require racket/sequence)
#;(time (sequence-fold + 0 (in-range #e1e7)))

