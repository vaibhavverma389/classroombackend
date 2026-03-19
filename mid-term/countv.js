const http = require('http');

let count = 0;

const server = http.createServer((req, res) => {

    // Ignore favicon request
    if (req.url === "/favicon.ico") {
        return;
    }

    count++;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Number of visitors: ${count}</h1>`);
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});
