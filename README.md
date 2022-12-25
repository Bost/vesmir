## Install / Update Heroku
```fish
# on Ubuntu:
# The `sudo snap install heroku --classic` doesn't work on Ubuntu
# See https://github.com/heroku/cli/issues/822
# https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli
curl https://cli-assets.heroku.com/install.sh | sh
# If the above doesn't work, try:
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
# When updating, if none of the above works, try:
heroku update

# on Guix:
npm install -g heroku
```

## Run on / Deploy to Heroku
```fish
set APP <heroku-app-name>
set racketVer $(racket --version | grep --only-matching "[[:digit:]+]\.[[:digit:]+]")
heroku buildpacks:set https://github.com/Bost/heroku-buildpack-racket --app $APP
heroku config:set RACKET_VERSION=$racketVer --app $APP
heroku config:set RUNTIME_ENV=heroku --app $APP
# heroku config:set PAPERTRAIL_API_TOKEN=<papertrail-token>
git remote add heroku https://git.heroku.com/$APP.git
git push heroku main
# deployment progress - see Papertail https://dashboard.heroku.com/apps/$APP
```

## Develop / Run locally
```fish
raco pkg install --deps search-auto racketscript
set racketVer $(racket --version | grep --only-matching "[[:digit:]+]\.[[:digit:]+]")
set racksBin ~/.racket/$racketVer/bin/racks
# rm -rf compiled/
# $racksBin --force-recompile --skip-arity-checks --build-dir js-build racks/<some-file>.rkt
racket --require server.rkt

raco pkg install
# raco pkg remove sample-heroku-app
racket --lib sample-heroku-app/server
```

## Development

In shell:
```bash
racket
```
Then in the Racket REPL:
```racket
(enter! "server.rkt")  ;; M-x racket-run-and-switch-to-repl
(start)
```

# Amazon AWS

## Installing or updating the latest version of the AWS CLI
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

Create file structure to upload on Amazon:
```bash
mkdir -p ~/Pictures/<dirname>/thumbs
```
Copy some pictures to `~/Pictures/<dirname>`
Create thumbnails by adjusting "files.rkt" and running "thumb.rkt"
Run:
```bash
racket --require server.rkt                                                                                     ─╯
```
Open http://localhost:8000/
