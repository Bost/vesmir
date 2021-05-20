## Deploy to Heroku
```bash
<!-- heroku buildpacks:set https://github.com/lexi-lambda/heroku-buildpack-racket -->
heroku config:set RACKET_VERSION=8.1
<!-- heroku config:set PAPERTRAIL_API_TOKEN=<papertrail-token> -->
<!-- heroku config:set BOT_TOKEN=<bot-token> -->
git push heroku master
```
