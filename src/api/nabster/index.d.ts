// import * as conf from './config.json';

declare type ApiKey = { apikey: string }

declare interface HttpGetHeaders { headers: ApiKey; }   

declare module 'nabster' {
    
    const HttpGetHeaders: HttpGetHeaders;
    const ApiKey: ApiKey;
    export {HttpGetHeaders,ApiKey}
}
