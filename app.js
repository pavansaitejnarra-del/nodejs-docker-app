const http = require('http');

http.createServer((req, res) => {
    res.end("Hello from Updated Docker!");
}).listen(3000);
