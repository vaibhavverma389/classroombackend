// data send through file on the server

// file name mydata.txt
const http = require('http');
const fs = require('fs');
const port = 3000; 
const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        fs.readFile("mydata.txt","utf-8",(err,data)=>{
            if(err)
            {
                res.end("File is not found");
                return;
            }
            res.end(data);
        });
    }

});


server.listen(port,()=>
{
    console.log(`server is running at port number ${port}`);
});