/**
 * User routes
 */

import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { usersSchema } from '../../db/index';
import mongoose from 'mongoose';

const usersRouter = express.Router();
const User = mongoose.model('User', usersSchema);

const USER = new User({
    _id: mongoose.Types.ObjectId(),
    username: 'cliff',
    password: 'paswd'
})
    .save()
    .then(
        (doc) => {
            console.log('doc: ', doc);
        })
    .catch((err) => {
        console.log('err: ', err);
    });


usersRouter.all('*', (req: Request, res: Response, next: NextFunction) => {
    console.log('User Router');

    next();
});

usersRouter.post('/', (req, res, next) => res.status(200).send({ auth: 'bitch˙' }));

usersRouter.get('/', (req, res, next) => res.status(200).send({ auth: 'bitch˙' }));

export { usersRouter };
