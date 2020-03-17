/**
 * Data module
 */
import * as env from 'dotenv';
import * as https from 'https';
import { baseDecode } from '../sec';
import { OutgoingHttpHeaders } from 'http';
env.config();



// import * as Headers from 'http-server';
const
  url: string = process.env.API_ENDPOINT,

  apiKey: string = baseDecode(process.env.API_KEY),
  contentType = ['Content-Type', 'application/json;charset=utf8'],
  headers: OutgoingHttpHeaders = { headers: ['apiKey', apiKey, ...contentType] };
console.log('headers: ', headers);

const req = https.get(url, headers, (res) => {
  // let data;
  // res.on('data', chunk => data += chunk);
  // res.on('end', () => {

  // });

});

dataResponse()

req.end();

// req.end(() => console.log('Connected'));

