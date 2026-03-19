// how to find the last 10 commit on the github
// create a http server for sharing json data

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'count.json');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/vaibhav' && req.method === 'GET') {
        fs.readFile(FILE_PATH, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: "Could not read vaibhav.json" }));
                return;
            }
            res.writeHead(200);
            res.end(data); 
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Endpoint not found. Use /vaibhav" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server live! View your data at http://localhost:${PORT}/vaibhav`);
});