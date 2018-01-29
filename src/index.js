import express from 'express';
const PORT = 3000;

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log('listening on port 3000!');
});