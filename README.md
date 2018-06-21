config-multi
============

Display config vars for multiple apps

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/config-multi.svg)](https://npmjs.org/package/config-multi)
[![CircleCI](https://circleci.com/gh/elbandito/config-multi/tree/master.svg?style=shield)](https://circleci.com/gh/elbandito/config-multi/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/elbandito/config-multi?branch=master&svg=true)](https://ci.appveyor.com/project/elbandito/config-multi/branch/master)
[![Codecov](https://codecov.io/gh/elbandito/config-multi/branch/master/graph/badge.svg)](https://codecov.io/gh/elbandito/config-multi)
[![Downloads/week](https://img.shields.io/npm/dw/config-multi.svg)](https://npmjs.org/package/config-multi)
[![License](https://img.shields.io/npm/l/config-multi.svg)](https://github.com/elbandito/config-multi/blob/master/package.json)

<!-- toc -->
* [Requirements](#requirements)
* [Install](#install)
* [Commands](#commands)
* [Usage](#usage)
<!-- tocstop -->
# Requirements
* Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

# Install
<!-- usage -->
```sh-session
$ git clone https://github.com/elbandito/config-multi.git
$ yarn
$ heroku plugins:link
```
<!-- usagestop -->
# Commands
## `heroku config:multi [APPS]`

Displays the config vars for each of the specified Heroku applications.  The list of applications are passed in as a comma `,` 
separated list e.g. `app1,app2,appN`.  Click [here](https://devcenter.heroku.com/articles/config-vars) for more information on
Heroku config vars.

# Usage

```
Display config vars for Heroku apps

USAGE
  $ heroku config:multi APPS

ARGUMENTS
  APPS  comma delimited list of applications

EXAMPLE
  $ heroku config:multi blooming-house-53,mysterious-dog-92
  
  blooming-house-53 Config Vars:
  ================================
  LANG=en_US.UTF-8
  RACK_ENV=production
  RAILS_ENV=production
  RAILS_SERVE_STATIC_FILES=enabled  
  
  mysterious-dog-92 Config Vars:
  ================================
  NPM_CONFIG_PRODUCTION=false
```

_See code: [src/commands/config/multi.ts](https://github.com/elbandito/config-multi/blob/master/src/commands/config/multi.ts)_
<!-- commandsstop -->
