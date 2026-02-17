// write the code to track user on 
// the route using filesystem  ans https module
// file system
// node --watch 

const http = require("http");
const fs = require("fs");
const port = 8080;


const server = http.createServer((req, res) => {
    const date = new Date().toLocaleString();

    const logmsg= `${date}  ${req.url} : new request \n`;
    console.log(logmsg);
    
})
