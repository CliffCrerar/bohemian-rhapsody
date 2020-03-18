/**
 * Application definition file
 */

import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import { Nabster } from './src/api/nabster/index';
import moment from 'moment';

const app: Express = express();

app.all('*', logger);

app.use('/nabster',Nabster);

// app.all('/users', usersRouter);
// app.all('/albums', albumsRouter);
// app.all('/artist', artistRouter);
// app.all('/data', tracksRouter);

export { app };

function logger(req: Request, res: Response, next: NextFunction) {
    console.table(req.headers);
    console.dir(req.path);
    console.log(moment().format());
    next();
}
