/**
 *
 */

import * as fs from 'fs';
import * as path from 'path';
import * as moment from 'moment';

console.log(moment().format('DD MM YYYY - HH:mm:ss'));

const
    { join } = path,
    { createReadStream, WriteStream, createWriteStream, existsSync, writeFileSync } = fs,
    logFile = `log-${moment().format('DD-MM-YYY_HH-mm-ss')}`,
    wStream = createWriteStream(join(__dirname, logFile));

// console.log('rStream: ', wStream);

process.stdin.pipe(wStream);

process.stdout.pipe(wStream);

process.stderr.pipe(wStream);

process.on('uncaughtException', (err) => {
    console.error(err.name);
    console.error(err.message);
});

process.on('exit', () => wStream.close());

wStream.on('open', (fd) => {
    console.log('Write Stream is now open');
    console.log(fd);
});

wStream.on('error', (err) => console.error('WRITE STREAM ERR', err));

export { wStream };


