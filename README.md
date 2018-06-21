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
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g config-multi
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
multi/0.0.0 darwin-x64 node-v9.4.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example hello [FILE]`](#oclif-example-hello-file)

## `oclif-example hello [FILE]`

describe the command here

```
Display config vars for Heroku apps

USAGE
  $ heroku config:multi APPS

ARGUMENTS
  APPS  comma delimited list of applications

EXAMPLE
  $ heroku config:multi blooming-house-53,mysterious-dog-92
  
  blooming-house-53 Config Vars:
  ===========================================
  LANG=en_US.UTF-8
  RACK_ENV=production
  RAILS_ENV=production
  RAILS_SERVE_STATIC_FILES=enabled  
  
  mysterious-dog-92 Config Vars:
  ===========================================
  NPM_CONFIG_PRODUCTION=false
```

_See code: [src/commands/hello.ts](https://github.com/elbandito/multi/blob/v0.0.0/src/commands/hello.ts)_
<!-- commandsstop -->
