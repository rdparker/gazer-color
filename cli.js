#!/usr/bin/env node
import process from 'node:process';
import yargs from 'yargs/yargs';
import gazer from './index.js';

const {argv} = yargs(process.argv.slice(2))
	.usage('Usage: gazer -v -p \'**/*.js\' -- <your command>')
	.alias('v', 'verbose')
	.describe('v', 'Turn on verbose output')
	.demand('p')
	.alias('p', 'pattern')
	.describe('p', 'Files to watch, globbing supported')
	.demand(1, 'You must provide a command to run');

const {pattern} = argv;
const cmd = argv._[0];
const args = argv._.slice(1);
const options = argv;

// Delete non gazer options
delete options.pattern;
delete options.v;
delete options.p;
delete options._;
delete options.$0;

gazer([pattern].flat(), cmd, args, options);
