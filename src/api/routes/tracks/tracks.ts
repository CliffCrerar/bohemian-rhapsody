/**
 * Tracks routes
 */
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

const tracksRouter = express.Router();

tracksRouter.all('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('User Router');

    next();
});

export { tracksRouter };
