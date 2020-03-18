/**
 * Application definition file
 */

import express from 'express';
import path from 'path';
import { Express, Request, Response, NextFunction } from 'express';
import { usersRouter, albumsRouter, artistRouter, tracksRouter } from './src/api/routes';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser'

//   moment from 'moment';
// import './src/api/logs/index';
// import { wStream } from './src/api/logs/index';

const
    app: Express = express(),
    staticApp = express.static,
    { resolve } = path;
// session = cookieSession({
//     name: 'borap',
//     keys: ['asdasdasdqefwrgfewtheryhw']
// });
// {session} = expSession;


app.set('trust proxy', 1);

app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

// console.log('app.defaultConfiguration: ', app);
// app.use('/', staticApp(resolve('dist/app')));
app.use('*', logger);
app.use('/users', usersRouter);
app.use('/albums', albumsRouter);
app.use('/artist', artistRouter);
app.use('/data', tracksRouter);

export { app };

function logger(req: Request, res: Response, next: NextFunction) {

    console.log(new Date());
    console.table(req.headers);
    console.log('COOKIES:', req.cookies);
    console.log('COOKIES:', req.signedCookies);
    console.dir('PATH:', req.path);



    if (['/', '/login'].includes(req.path)) {
        res.redirect(req.path);
    } else {
        next();
    }

}
