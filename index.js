import {relative} from 'node:path';
import process from 'node:process';
import gaze from 'gaze';
import npmlog from 'npmlog';
import Runner from './runner.js';

const {info} = npmlog;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (patterns, cmd, args, options) {
	options = options || {};
	const runner = new Runner(cmd, args, options);

	gaze(patterns, options, function (error) {
		if (error) {
			throw new Error(error);
		}

		const fileCount = Object.keys(this.watched()).length;

		info('gazer-color', 'Watching %d file[s] (%s)', fileCount, patterns.join(', '));

		this.on('all', (event, filepath) => {
			filepath = relative(process.cwd(), filepath);
			info('gazer-color', '`%s` %s', filepath, event);
			runner.run();
		});
	});
}
