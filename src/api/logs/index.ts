/**
 *
 */

import * as fs from 'fs';
import * as path from 'path';
import * as moment from 'moment';

console.log(moment().format('DD MM YYYY - HH:mm:ss'));

const
    { join } = path,
    { createReadStream, createWriteStream, existsSync, writeFileSync } = fs,
    logFile = `log-${moment().format('DD-MM-YYY_HH-mm-ss')}`,
    rStream = createWriteStream(join(__dirname, logFile), 'utf8');

console.log('rStream: ', rStream);

process.stdin.pipe(rStream);

process.stdout.pipe(rStream);

process.stderr.pipe(rStream);

process.on('uncaughtException', (err) => {
    console.error(err.name);
    console.error(err.message);
});

process.on('exit', () => rStream.on())


