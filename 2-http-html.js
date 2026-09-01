const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./demo.html')

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage) //passing content in body
        res.end() //compulsory to make sure entire info received.
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>') 
        res.end()
    }
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Resource Not Found</h1>')
        res.end()
    }
}); 

server.listen(5000) //only for local development 