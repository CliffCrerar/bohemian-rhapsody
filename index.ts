/**
 * Application entry point
 */

import env from 'dotenv';
import { app } from './app';
import normalize from 'normalize-port';
import os from 'os';

env.config();

const development = process.env.NODE_ENV === 'development';

const port = normalize(process.env.PORT || 3000);

app.listen(port, () => logAppStart(os.hostname(), port));

function logAppStart($host, $port) {
    console.log(`|-------------------------------------------|`);
    console.log('| App Origin -> '.concat($host, ':', $port));
    console.log(`|-------------------------------------------|`);
}



