const {createServer} = require("node:http");

const hostname = '127.0.0.1';

const port = 4000;

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if(req.url==="/")
    {
        res.setHeader('Content-Type','text/plain');
        res.end("This is my main page")
    }
    else if(req.url === "/about")
    {
        res.setHeader('Content-Type','text/plain');
        res.end("This is my about page")
    }
    else if(req.url === "/contact")
    {
        res.setHeader('Content-Type','text/plain');
        res.end("This is my contact page")

    }
    else
    {
        res.setHeader('Content-Type','text/plain');
        res.end("this is my 404 page")
    }
});

server.listen(port, hostname, ()=>
{
    console.log(`Server running at http://${hostname}:${port}/`);
})
