//console.log('Mi primer servidor...');
const http = require('http');
//const { type } = require('os');

const server = http.createServer((request, response) => {
   // method, url => request
   // status, mimeType, response => response
   const status = '200';
   const mimeType = { 'Content-type': 'text/html' }; // Cuando son dos palaras lleva comillas
   const contentResponse = '<html> <body> Hola desde node ... </body> </html>';
   response.writeHead(status, mimeType);
   response.write(contentResponse);
   response.end(); 
}); 

server.listen(5500);

console.log('Mi primer servidor...');