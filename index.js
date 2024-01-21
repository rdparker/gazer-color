'use strict';
import { relative } from 'path';

import gaze from 'gaze';
import npmlog from 'npmlog';
const info = npmlog.info;

import Runner from './runner.js';

export default function (patterns, cmd, args, opts) {
	opts = opts || {};
	const runner = new Runner(cmd, args, opts);

	gaze(patterns, opts, function (err) {
		if (err) {
			throw new Error(err);
		}

		const fileCount = Object.keys(this.watched()).length;

		info('gazer-color', 'Watching %d file[s] (%s)', fileCount, patterns.join(', '));

		this.on('all', (event, filepath) => {
			filepath = relative(process.cwd(), filepath);
			info('gazer-color', '`%s` %s', filepath, event);
			runner.run();
		});
	});
};
