## Minimal working example of using RacketScript with Racket web-server

Install:
```bash
raco pkg install racketscript
```

Compile `overview.rkt` into JavaScript and serve it:
```bash
rm -rf ./js-build      # cleanup
racks --force-recompile --skip-arity-checks overview.rkt
racket --require server.rkt
```
Open http://localhost:8000/ , in the Web Console appear errors/warnings:

A big thank you goes to Jens Axel Søgaard for providing an inspirational example
and to Jesse Alama for nudging me out of despair.
