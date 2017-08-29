[![Build Status](https://travis-ci.org/Gilad-Kutiel-App/jumpfm.svg?branch=master)](https://travis-ci.org/Gilad-Kutiel-App/jumpfm)  [![Build status](https://ci.appveyor.com/api/projects/status/g9ggpk5578fq56x2?svg=true)](https://ci.appveyor.com/project/gkutiel/jumpfm) 

# About

JumpFm is a cross platform<sup>1,2</sup> dual panel file manager with builtin superpowers. 

----
<sup>1</sup>
Windows built is not tested at all, install it at your own risk

<sup>2</sup>
For a Mac release see [this fork](https://github.com/heywoodlh/jumpfm)

### Mac Specific Keyboard Info:
Delete - fn + delete

Tip: for all the keyboard mappings requiring ctrl

# \<dev/\>

## tl;dr.<sup>1,2</sup>
```
git clone git@github.com:Gilad-Kutiel-App/jumpfm.git
npm i -g typescript electron
cd jumpfm
npm i
tsc -w
sass --watch scss:css
electron .
```
---
<sup>1</sup>
You might want to [change npm's default directory](https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory)

<sup>2</sup>
Use different terminal for each of  ```tsc -w```, ```sass --watch scss:css```, ```electron .```

## More \<dev/\>

JumpFm is an [Electron](https://electron.atom.io/) based app.
It is written in [TypeScript](https://www.typescriptlang.org/).
To hack the code all you need is [node.js](https://nodejs.org/en/) a
[decent editor](http://bit.ly/2wHIoSz) and a [sass compiler](http://sass-lang.com/).
This is how your terminal should looks like:

![](/misc/dev.png)



