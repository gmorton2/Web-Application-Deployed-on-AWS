const express = require('express');
const app = express();
const fd = require('fs');

app.get('/', (req, res) => {
	//res.send("Welcome");
	//set header content type
	res.setHeader('Content-Type', 'text/html');
	//send an html file
	fs.readFile('./UI/index.html', (err, DataCue)) => {
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
app.listen(port, () => {
	console.log("YO");
});