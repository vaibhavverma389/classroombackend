//data send through url and recive in a txt file
const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000;


const server = http.createServer((req,res)=>{
    let msag=url.parse(req.url,true).query;
    if(msag.msg === "5678")
    {
        fs.writeFile("userdata.txt",msag.msg,()=>{});
        res.end("Data Saved");
    }
    else
    {
        res.end("Invalid Data");
    }
});




server.listen(port,()=>
{
    console.log(`server is running at port number ${port}`);
});