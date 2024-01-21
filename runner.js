import {spawn} from 'node:child_process';
import process from 'node:process';
import debounce from 'lodash.debounce';
import npmlog from 'npmlog';

const {info} = npmlog;

function sanitizeSpawnArgs(cmd, args) {
	const spawnOptions = {stdio: 'inherit'};

	if (process.platform === 'win32') {
		args = ['/c', '"' + cmd + '"', ...args];
		cmd = 'cmd';
		spawnOptions.windowsVerbatimArguments = true;
	}

	return [cmd, args, spawnOptions];
}

function Runner(cmd, args, options) {
	const wait = 100; // Debounce: the number of milliseconds to delay
	const spawnArgs = sanitizeSpawnArgs(cmd, args);
	const spawnArgsLogString = [spawnArgs[0], spawnArgs[1]].join(' ');

	options = options || {};

	this.spawn = function () {
		info('gazer-color', 'Running `%s`', spawnArgsLogString);

		const child = spawn(...spawnArgs);

		if (options.verbose) {
			child.on('close', code => {
				info('gazer-color', '`%s` exited with code %d', spawnArgsLogString, code);
			});
		}
	};

	this.run = debounce(this.spawn, wait);
}

export default Runner;
