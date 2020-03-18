/**
 * Parses Incoming requests
 */
// tslint:disable-next-line: deprecation
import bodyParser from 'body-parser';

// create application/json parser
// tslint:disable-next-line: deprecation
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// tslint:disable-next-line: deprecation
const urlencodedParser = bodyParser.urlencoded({ extended: false });

export { jsonParser, urlencodedParser };


