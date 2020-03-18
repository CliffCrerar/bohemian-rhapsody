/**
 * Application entry point
 */

import * as env from 'dotenv';
import { app } from './app';
import * as normalize from 'normalize-port';
import * as os from 'os';

const development = process.env.NODE_ENV === 'development';
console.log('development: ', development);

const port = normalize(process.env.PORT || 3000);

env.config();

// export.handler = app;



app.listen(port, () => logAppStart(os.hostname(), port));
// console.log('app: ', app);

function logAppStart($host, $port) {
    console.log(`|-------------------------------------------|`);
    console.log('| App Origin -> '.concat($host, ':', $port));
    console.log(`|-------------------------------------------|`);
}



