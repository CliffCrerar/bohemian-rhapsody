/**
 * Mongoose ORM
 */

// declare type ApiKey  = { apikey: string }

// declare interface HttpGetHeaders {headers: ApiKey;}

declare type ApiKey  = { apikey: string }

declare interface HttpGetHeaders {headers: ApiKey;}

declare module Napster {
    const ApiKey:ApiKey;
    const HttpGetHeaders:HttpGetHeaders;
    export {ApiKey,HttpGetHeaders}
}
