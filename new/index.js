const http = require("node:http");

const hostname = '127.0.0.1';

const port = 4000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if(req.url==="/")
    {
        res.setHeader('Content-Type','text/html');
        res.write("This is my main page")
    }
    else if(req.url === "/about")
    {
        res.setHeader('Content-Type','text/html');
        res.write("<h1>This is my about page</h1> ")
    }
    else if(req.url === "/contact")
    {
        res.setHeader('Content-Type','text/plain');
        res.write("This is my contact page")

    }
    else
    {
        res.setHeader('Content-Type','text/plain');
        res.write("this is my 404 page")
    }
    res.end();
});

server.listen(port, hostname, ()=>
{
    console.log(`Server running at http://${hostname}:${port}/`);
})
