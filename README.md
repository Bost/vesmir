## (Non-working) Example of using RacketScript with Racket web-server

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
```
[err] Loading module from “http://localhost:8000/js-build/overview.rkt.js” was blocked because of a disallowed MIME type (“text/html”).
[wrn] The stylesheet http://localhost:8000/static/screen.css was loaded as CSS even though its MIME type, “text/html”, is not “text/css”.
```

# Your help with getting this running will be greatly appreciated!
