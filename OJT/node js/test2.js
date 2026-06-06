const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('Home.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading Home.html');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(3000, () => {
    console.log('🚀 Server is running at http://localhost:3000/');
});