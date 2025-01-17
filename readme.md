# A Gazer fork capable of color output [![Build Status](https://travis-ci.org/schnittstabil/gazer-color.svg?branch=master)](https://travis-ci.org/schnittstabil/gazer-color) [![Build status Windows](https://ci.appveyor.com/api/projects/status/d8x0r04tcqpes7gi/branch/master?svg=true)](https://ci.appveyor.com/project/schnittstabil/gazer-color/branch/master)

> Watch some files, do a thing

A simple wrapper for [Shama's gaze
module](https://github.com/shama/gaze) that performs an arbitrary
command when files change. Like
[watchify](https://github.com/substack/watchify), but for everything.

## Installation

```shell
npm install gazer-color
```

## Usage

```shell
$ gazer-color --pattern README.md -- echo blorp
# note the -- between the gazer-color arguments like --pattern and the command and its arguments

[README.md changes]

> blorp
```

### Multiple patterns

[gaze](https://github.com/shama/gaze#usage) accepts an array of patterns, so does `gazer-color`:

```shell
$ gazer-color --pattern '**/*.js' --pattern '!node_modules/**/*' -- echo blorp

[index.js changes]

> blorp
```

### Arbitrary watch tasks with npm run

Here's how you might use `gazer-color` to run a build task every time a file
changes:

```javascript
{
  "scripts": {
    "test": "mocha",
    "watch-test": "gazer-color -p \"public/less/**/*.less\" -- npm run test"
  }
}
```

And then start the watcher:

```shell
npm run watch-less
```
