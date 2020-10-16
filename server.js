//const express = require('express');
//const app = express();
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	//set header content type
	res.setHeader('Content-Type', 'text/html');
	//send an html file
	fs.readFile('./UI/index.html', (err, data) => {
	if (err) {
		console.log(err);
		res.end();
	}
	else {
		res.write(data);
		res.end();
	}
})
	
    
});

const port = process.env.port || 3000
server.listen(port, 'localhost', () => {
	console.log("Listening for requests");
});