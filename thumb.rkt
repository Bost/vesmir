#lang racket/gui

;; M-x racket-run-and-switch-to-repl

(require
 (prefix-in f: "files.rkt")
 pict)

(define (to-thumb dir f)
  (let* ([basedir (format "~a/Pictures/~a/" (getenv "HOME") dir)]
         [fn (string-append basedir f)]
         [td (string-append basedir "thumbs/")]
         [tf (string-append td f)]
         [b (bitmap (read-bitmap fn))]
         [p (scale-to-fit b 150 150 #:mode 'preserve)])
    (unless (directory-exists? td)
      (make-directory td))
    (printf "Converting ~a ...\n" fn)
    (send (pict->bitmap p) save-file tf 'jpeg)))

#;(map (f:partial to-thumb f:martin-zts-dir) f:files-martin-zts)
#;(map (f:partial to-thumb f:kremnica-dir) f:files-kremnica)
#;(map (f:partial to-thumb f:martin-dir) f:files-martin)
#;(map (f:partial to-thumb f:krivan-dir) f:files-krivan)
