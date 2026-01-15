const {createServer} = require("node:http");

const hostname = '127.0.0.1';

const port = 4000;

const server = createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Gla university\n');
});

server.listen(port, hostname, ()=>
{
    console.log(`server running at port numner ${port}`);
})
