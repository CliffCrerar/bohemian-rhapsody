/**
 * Data module
 */
import * as env from 'dotenv';
import * as https from 'https';
import { baseDecode } from '../sec';

env.config();

const
  resource  = 'https://api.napster.com',
  apiVersion = 'v2.2',
  apiKey: string = baseDecode(process.env.API_KEY),
  options = { headers: { apiKey } };

// Export object
const Nabster = {
  // call artist
  artist: (...param: any[any]): any => {
    const callBack = param.slice(param.length - 1)[0];
    httpCaller(buildUrl('albums/', param), (data) => callBack(data));
    return;
  },
  albums: (...param: any[any]): any => {
    const callBack = param.slice(param.length);
    httpCaller(buildUrl('albums/', param), (data) => callBack(data));
    return;
  },
  tracks: (...param: any[any]): any => {
    const callBack = param.slice(param.length);
    httpCaller(buildUrl('tracks/', param), (data) => callBack(data));
    return;
  }
};
// build the urls
function buildUrl(segment: string, limitOffset: string[number]): string {

  return `${resource}/${apiVersion}/${segment}/top`;
  // return 'https://www.cliff-crerar.tech'/*/${l}${o}*/
}

function httpCaller(urlString: string, callBack: CallableFunction): void {

  try {

    const req = https.get(urlString, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => { callBack(data); });

    }).end();

  } catch (err) { callBack(err); }
}


export {Nabster};



// dataResponse((data) => console.log('data:',data));

// req.end(() => console.log('Connected'));

/**
 *
 * // @ts-nocheck
200	OK	Success!
201	Created	The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URI(s) returned in the Location HTTP header field of the response.
202	Accepted	The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.
204	No Content	The server has fulfilled the request but does not need to return an entity-body
400	Bad Request	The request was invalid or cannot be otherwise served. A response error message may explain reasons in more detail.
401	Unauthorized	Authentication credentials were missing or incorrect. If you are accessing metadata API endpoints only with apikey, check that it is valid.
403	Forbidden	The request is understood, but it has been refused or access is not allowed. This status code is used when you try to modify or access resources you do not have permission for.
404	Not Found	The URI requested is invalid or the resource requested does not exist.
405	Method Not Allowed	The method specified in the request is not allowed for the resource identified by the request URI. See response headers for allowed methods.
409	Conflict	The request could not be completed due to a conflict with the current state of the resource you were trying to update.
413	Payload Too Large	The attached object was too large. Try again with a smaller object.
429	Too Many Requests	Used when a request cannot be served due to the rate limit having been exhausted (throttling).

    500	Internal Server Error	Something is broken. Please email all relevant details to api-feedback@napster.com.
 */

