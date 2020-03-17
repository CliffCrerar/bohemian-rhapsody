/**
 * Data module
 */
/// <reference path="./index.d.ts" />
import * as express from 'express';
import * as env from 'dotenv';
import * as https from 'https';
import { baseDecode } from '../sec';
import { IncomingMessage } from 'http';


env.config();


const
  url: string = process.env.API_ENDPOINT,
  apikey: string = baseDecode(process.env.API_KEY),
  headers:HttpGetHeaders = {headers: {apikey}}
console.log('headers: ', headers);


https.get(url, headers,handleResponse).end();

function handleResponse(res: IncomingMessage){

}

// req.end(() => console.log('Connected'));

