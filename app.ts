/**
 * Application definition file
 */

import { resolve } from 'path';
import express, { Express, Request, Response, NextFunction } from 'express';
import { createReadStream } from 'fs'
// import cookieSession from 'cookie-session';


// import cookieParser from 'cookie-parser';

// https://github.com/CliffCrerar/bohemian-rhapsody.git


const app = express()

app.use((req, res: Response<any>, next: NextFunction) => {
    const { path, headers } = req;
    const { statusCode: stat } = res;
    const { host, connection, ['sec-fetch-dest']: secFetchDest } = headers;
    // console.log(stat, ': PATH:', path, '\t\t\tHOST:', host, 'CONNECTION:', connection, 'SEC-FETCH-DEST', secFetchDest);
    console.log('STATUS:', stat, ': PATH:', path, ' - TYPE - ', secFetchDest);
    // console.log('COOKIES:', req.cookies);
    // console.log('COOKIES:', req.signedCookies);

    next();
});

app.use(express.static(resolve('dist/app/')));

app.get(['/', '/login'], (req, res) =>
    createReadStream(resolve('dist/app/index.html'))
        .pipe(res.set('Content-Type', 'text/html').status(200)))

// app.use(appRoutes[1], usersRouter);
// app.use(appRoutes[2], albumsRouter);
// app.use(appRoutes[3], artistRouter);
// app.use(appRoutes[4], tracksRouter);

// function logger(req: Request<any>, res: Response<any>, next: NextFunction) {
//     console.log(new Date());
//     // console.table(req.headers);/
//     console.log('COOKIES:', req.cookies);
//     console.log('COOKIES:', req.signedCookies);
//     console.dir('PATH:', req.route);

//     ['/login'].includes(req.path)
//         ? res.redirect(req.path)
//         : next();
// }

export { app };
