/**
 * Genre
 */

import * as express from 'express';

const genre = express.Router();

import { Request, Response, NextFunction } from 'express';
genre.all('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('User Router');

    next();
});

export { genre };
