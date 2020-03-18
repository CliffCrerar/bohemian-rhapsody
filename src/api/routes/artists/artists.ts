/**
 * Artist routes
 */

import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

const artistRouter = express.Router();



artistRouter.all('*', (req: Request, res: Response, next: NextFunction) => {
    console.log('User artistRouter');

    next();
});

artistRouter.get('*', getArtists);

artistRouter.post('*', postArtists);


function getArtists(req: Request, res: Response) {
    console.log('req.path: ', req.path);
    console.log('GET ARTIST');
    res.status(200).send('artists');
}

function postArtists(req: Request, res: Response) {
    console.log('req.path: ', req.path);
    console.log('GET ARTIST');
    res.status(200).send('artists');
}

export { artistRouter };
