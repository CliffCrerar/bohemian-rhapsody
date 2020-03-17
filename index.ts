/**
 * Application entry point
 */

import * as dotenv from 'dotenv';
import { app } from './app';
import * as normalize from 'normalize-port';
dotenv.config();
const development = process.env.NODE_ENV === 'development';

const port = normalize(process.env.PORT || 3000);

// export.handler = app;

app.listen(port, () => 'App listening on ' + 'HOST' + port);
// console.log('app: ', app);



