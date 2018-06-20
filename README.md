# config-multi
Heroku plugin to output application config vars

# How to Install

TBD

# Usage

```
$ heroku config:multi firstapp,secondapp
firstapp Config Vars
====================
NODE_ENV=production
DATABASE_URL=pg://db

secondapp Config Vars
====================
NODE_ENV=staging
DATABASE_URL=pg://db
```