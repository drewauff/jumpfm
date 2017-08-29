[![Build Status](https://travis-ci.org/Gilad-Kutiel-App/jumpfm.svg?branch=master)](https://travis-ci.org/Gilad-Kutiel-App/jumpfm)  [![Build status](https://ci.appveyor.com/api/projects/status/g9ggpk5578fq56x2?svg=true)](https://ci.appveyor.com/project/gkutiel/jumpfm) 

# About

JumpFm is a cross platform dual panel file manager with builtin superpowers. This fork contains the OS X release.



## Installation

Download the latest release here:

[Releases](https://github.com/heywoodlh/jumpfm/releases)

Double click the .dmg file and drag the jumpfm application into Applications.

![alt text](https://raw.githubusercontent.com/heywoodlh/jumpfm/master/misc/install.gif) 

### Usage
Please refer to the [wiki](https://github.com/heywoodlh/jumpfm/wiki) for usage information including keyboard shortcuts.

# Development

## Build instructions:
```
git clone git@github.com:heywoodlh/jumpfm.git
npm i -g typescript electron
cd jumpfm
npm i
tsc -w
sass --watch scss:css
electron .
```
---

## Other information:

JumpFm is an [Electron](https://electron.atom.io/) based app.
It is written in [TypeScript](https://www.typescriptlang.org/).
To hack the code all you need is [node.js](https://nodejs.org/en/) a
[decent editor](http://bit.ly/2wHIoSz) and a [sass compiler](http://sass-lang.com/).


