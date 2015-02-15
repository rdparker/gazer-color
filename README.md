# Gazer

> Watch some files, do a thing

A simple wrapper for [Shama's gaze
module](https://github.com/shama/gaze) that performs an arbitrary
command when files change. Like
[watchify](https://github.com/substack/watchify), but for everything.

## Installation

This works best as a `devDependency` in the project you plan to use it
in:

```shell
$ npm install --save-dev gazer
```

You can easily invoke `gazer` with `npm run` via npm scripts that you
set up in your package.json. See the usage example below for more
details.

If you want to use this everywhere, across multipe projects, you can install it
globally, too:

```shell
$ npm install -g gazer
```

## Usage

```shell
$ gazer --pattern 'README.md' echo 'blorp'

[README.md changes]

> 'blorp'
```

### Double dash

If you need to pass an option (e.g. `-e`) to the command you're running, use
`--` to separate the option arguments from the positional arguments:

```shell
$ gazer -p README.md -- node -e 'console.log("blorp");'
```

This feature is provided [for free](http://c2.com/cgi/wiki?ForFree)
by [yargs](https://github.com/chevex/yargs).


### Multiple patterns

[gaze](https://github.com/shama/gaze#usage) accepts an array of patterns, so do `gazer`.

```javascript
gaze(['**/*.js', '!node_modules/**/*'], function() {
  console.log('blorp');
});
```

```shell
$ gazer --pattern '**/*.js' --pattern '!node_modules/**/*' -- echo 'blorp'

[index.js changes]

> 'blorp'
```

### Arbitrary watch tasks with npm run

If you haven't read substack's [post describing lightweight build steps
with `npm run`](http://substack.net/task_automation_with_npm_run), I'll
give you a moment to get up to speed.

Here's how you might use `gazer` to run a build task every time a file
changes:

```javascript
{
  "scripts": {
    "build-less": "lessc public/less/main.less public/css/main.css",
    "watch-less": "gazer -p 'public/less/**/*.less' npm run build-less"
  }
}
```

And then start the watcher:

```shell
$ npm run watch-less
```

