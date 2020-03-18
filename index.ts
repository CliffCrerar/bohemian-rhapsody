/**
 * Application entry point
 */

import env from 'dotenv';
import { app } from './app';
import normalize from 'normalize-port';
import os from 'os';

env.config();

const development = process.env.NODE_ENV === 'development';
console.log('development: ', development);

const port = normalize(process.env.PORT || 3000);



// export.handler = app;



app.listen(port, () => logAppStart(os.hostname(), port));
// console.log('app: ', app);

function logAppStart($host, $port) {
    console.log(`|-------------------------------------------|`);
    console.log('| App Origin -> '.concat($host, ':', $port));
    console.log(`|-------------------------------------------|`);
}



