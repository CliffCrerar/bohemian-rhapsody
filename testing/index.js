const sql = require('mssql')

 
const test = () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        sql.connect('mssql://sa:SEEqualS3rv3r@localhost:1433/tempdb',(err,client)=>{
            console.log('client: ', client);
            console.log('err: ', err);
    console.log();
        })
        
        
        
    } catch (err) {
        console.log('err: ', err);
        console.log();
        // ... error checks

    }
}

test();