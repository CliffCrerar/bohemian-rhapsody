/**
 * Application definition file
 */

import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import { usersRouter, albumsRouter, artistRouter, tracksRouter } from './src/api/routes';
// import moment from 'moment';
// import './src/api/logs/index';
// import { wStream } from './src/api/logs/index';

const
    app: Express = express();
// m = moment();

app.all('*', logger);

app.all('/users', usersRouter);
app.all('/albums', albumsRouter);
app.all('/artist', artistRouter);
app.all('/data', tracksRouter);

export { app };

function logger(req: Request, res: Response, next: NextFunction) {
    console.table(req.headers);
    console.dir(req.path);
    console.log(new Date());
    next();
}
