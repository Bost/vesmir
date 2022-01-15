## Install Heroku
```fish
# on Ubuntu:
# The `sudo snap install heroku --classic` doesn't work on Ubuntu
# See https://github.com/heroku/cli/issues/822
curl https://cli-assets.heroku.com/install.sh | sh

# on Guix:
npm install -g heroku
```

## PostgreSQL
```fish
## on Ubuntu:
sudo apt install --yes postgresql postgresql-contrib
# TODO see the the proposition given by the installation process:
# You can now start the database server using:
#     pg_ctlcluster 13 main start
sudo systemctl status postgresql.service
sudo systemctl stop postgresql.service
mkdir -p ./var/log/
sudo chmod --recursive u=rwx,g=rwx,o=rwx ./var/
sudo --shell --user=postgres
# when using fish shell:
set --export PATH /usr/lib/postgresql/*/bin $PATH
initdb ./var/pg # dropdb postgres && rm -rf ./var/pg
pg_ctl -D ./var/pg -l ./var/log/postgres.log start
# see also: postgres -D ./var/pg &

## on GuixOS:
pg_ctl -D ./var/pg -l ./var/log/postgres.log start
```


## Run on / Deploy to Heroku
```fish
set APP <...>
heroku buildpacks:set https://github.com/lexi-lambda/heroku-buildpack-racket --app $APP
heroku config:set RACKET_VERSION=8.3 --app $APP
# heroku config:set PAPERTRAIL_API_TOKEN=<papertrail-token>
# heroku config:set BOT_TOKEN=<bot-token>
git remote add heroku https://git.heroku.com/$APP.git
git push heroku main
```

## Test Heroku
```fish
curl --request  GET https://$APP.herokuapp.com/values
curl --request POST -H 'Content-Type: application/json' -d '{"x":"1", "y":"2"}' \
     https://$APP.herokuapp.com/values
```

## Develop / Run locally
```fish
raco pkg install racketscript
# racks wumpus.rkt
racks --force-recompile --skip-arity-checks tetris.rkt
# racket --require server.rkt

raco pkg install
# raco pkg remove sample-heroku-app
racket --lib sample-heroku-app/server

```

## Test locally
```fish
curl --request  GET http://localhost:8080/values
curl --request POST -H 'Content-Type: application/json' -d '{"x":"1", "y":"2"}' \
     http://localhost:8080/values
```

## Development

In shell:
```bash
racket
```
Then in the Racket REPL:
```racket
(enter! "server.rkt")  ;; s-o
(start)
```

## Test
```bash
curl --request GET  http://localhost:8080/values
curl --data '{"x":"1", "y":"2"}' --request POST http://localhost:8080/values
```
