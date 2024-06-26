require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// req is request
// res is response
app.get('/', (req, res) => {
	res.send('Hello world!');
});

app.get('/twitter', (req, res) => {
	res.send('niceboi');
});

app.get('/login', (req, res) => {
	res.send('<h1>You have made a web app! Congrats!</h1>');
});

app.get('/bababooey', (req, res) => {
	res.json({
		name: 'bababooey'
	})
});

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${port}`);
});