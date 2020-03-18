/**
 * Data module
 */
/// <reference path="index.d.ts" />

import * as https from 'https';
import { baseDecode } from '../sec';
import { IncomingMessage } from 'http';

const
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


export { NabsterGet };
