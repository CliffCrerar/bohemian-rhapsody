/**
 * Data module
 */
/// <reference path="index.d.ts" />

// import * as express from 'express';
import * as env from 'dotenv';
import * as https from 'https';
import { baseDecode } from '../sec';
import { IncomingMessage } from 'http';
env.config();

const
    // Nabster = express.Router(),
    conf = {
        NabsterResource: 'https://api.napster.com',
        ApiVersion: 'v2.2'
    },
    url = conf.NabsterResource.concat('/', conf.ApiVersion),
    apikey: string = baseDecode(process.env.API_KEY),
    headers: HttpGetHeaders = { headers: { apikey } },

    NabsterGet = (reqPath, callBack: CallableFunction): void => {
        let data = '';
        try {
            https.get(url + '/' + reqPath, headers, (res: IncomingMessage) => {
                res.on('data', (mDataChunk) => data += mDataChunk);
                res.on('end', () => callBack(data));
                return;
            }).end();
        } catch (err) {
            callBack(err);
        }
    };

// Nabster.route('/')
//   .all((req, res, next) => {

//     console.log('req.params: ', req.params);
//     console.log('called path ', req.path);
//     // const reqPath = req.path;
//     res.status(200).send(req.path);

//   });


export { NabsterGet };
