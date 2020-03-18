/**
 * Albums routes
 */


import * as express from 'express';
import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';

const albumsRouter: Router = express.Router();

albumsRouter.all('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('User artistRouter');

    next();
});

export { albumsRouter };
