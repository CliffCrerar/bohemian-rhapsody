/**
 * Application definition file
 */

import * as express from 'express';
import {Express} from 'express';
import './src/api/napster';

import { usersRouter } from './src/api/routes';

const app: Express = express();

// app.all('/users', usersRouter);
// app.all('/albums', albumsRouter);
// app.all('/artist', artistRouter);
// app.all('/data', tracksRouter);

export {app};
