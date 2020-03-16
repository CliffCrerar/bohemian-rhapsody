/**
 * Test db connection
 */
require('dotenv').config({path: require('path').resolve('.env')});
const
    sql = require('mssql'),
    { readFileSync } = require('fs');

const { DBHOST, DBPORT, DBUSER, DB } = process.env;
const pw = readFileSync(require('path').join(__dirname,'.secret'), 'utf8').split(/\n/)[0].split('=')[1];
((callback) => {
    // make sure that any items are correctly URL encoded in the connection string
    sql.connect(`mssql://${DBUSER}:${pw}@${DBHOST}:${DBPORT}/${DB}`, (err, client) => {
        if (err) {
            callback(err, true);
        } else {
            callback(client, false);
        }
    })
})(responseHandle)

function responseHandle(resp, isError) {
    if (isError) {
        throw resp;
    } else {
        console.log('Connected to SQL server: ', resp.connected);
    }
}