#lang racket/base

(require
 racket #| string-join |#
 racket/list #| last |#)

(define (partial fun . args)
  (lambda x (apply fun (append args x))))

(provide (all-defined-out))
#;(provide tags)
