const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.end('<h1>Hello world!</h1>');
    }
    if (req.url === '/about') {
        res.end("<h1>I'm just a poor boy from a poor family</h1>");
    }
    res.end('<h1>Why are you here?</h1>')
})

server.listen(5000)