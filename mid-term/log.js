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

    fs.appendFile("log.txt",logmsg + "/n", (err) => {
        if (err) {
            console.log("Error writing to log file", err);
        }
    });
    // routes

    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("Home page");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("About page");
    }
    else if (req.url === "/contact") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("Contact page");
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("Page not found");
    }
    
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});