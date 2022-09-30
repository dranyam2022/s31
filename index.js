const https = require("http");
const port = 3000;

const server = https.createServer((request, response) => {
    if (request.url == '/login') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('You are in the login page!')
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' })
        response.end('Page not available.')
    }
})

server.listen(port)

console.log(`Server is running at localhost:${port}`)