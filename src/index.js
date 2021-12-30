const http = require('http');

const hostname = 'localhost';
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html', 'charset', 'utf-8');
    res.end('<h1>Roman Nameral</h1>');
});


server.listen(PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${PORT}`);
});