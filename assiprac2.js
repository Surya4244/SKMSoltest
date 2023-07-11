const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

//port - 8081 - pass - using
//port - 9000 - pass
//port - 21 - fails
//port - 443 - pass

const server = http.createServer((req, res) => {
 res.statusCode = 200; //server could process the request properly
 res,setHeader('Content-Type', 'text/plain'); //text/plain :: server is responding with text data
 res.end('Hello Sagar\n'); //What is the response from the server
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname} :${port}/`);
 console.log("Consoles My Name is Surya");
 console.log("Consoles Hello Sagar");
}); 
