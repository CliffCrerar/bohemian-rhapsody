/**
 * Artist routes
 */

import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

const artistRouter = express.Router();

artistRouter.all('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('User artistRouter');

    next();
});


export { artistRouter };
