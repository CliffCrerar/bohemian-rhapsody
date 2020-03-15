const sql = require('mssql')

 
const test = () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        sql.connect('mssql://sa:b0h3m1an5a7so8y@localhost:1433/tempdb',(err,client)=>{
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