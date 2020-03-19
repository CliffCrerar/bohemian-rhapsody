/**
 * User routes
 */

import * as express from 'express';
// import { Request, Response, NextFunction } from 'express';

const usersRouter = express.Router();

import { Request, Response, NextFunction } from 'express';
usersRouter.all('*', (req: Request, res: Response, next: NextFunction) => {
    console.log('User Router');

    next();
});

usersRouter.post('/', (req, res, next) => res.send(200).send({ auth: 'bitch˙' }))

export { usersRouter };
