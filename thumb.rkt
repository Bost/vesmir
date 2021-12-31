#lang racket/gui

(require
 (prefix-in f: "files.rkt")
 pict)

(define (to-thumb dir f)
  (let* ([basedir (format "~a/Pictures/~a/" (getenv "HOME") dir)]
         [fn (string-append basedir f)]
         [tf (string-append basedir "thumbs/" f)]
         [b (bitmap (read-bitmap fn))]
         [p (scale-to-fit b 150 150 #:mode 'preserve)])
    (printf "fn: ~a\n" fn)
    (send (pict->bitmap p) save-file tf 'jpeg)))

#;(map (curry to-thumb f:martin-dir) f:files-martin)
#;(map (curry to-thumb f:krivan-dir) f:files-krivan)
