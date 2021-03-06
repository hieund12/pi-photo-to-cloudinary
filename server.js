const express = require('express');
const app = express();
const port = 8080;
const takephoto = require('./upload');

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

async function photo() {
    var pic = await takephoto();
    console.log(`result is => ${pic}`, pic);
    return pic;
}

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/photo', async (req, res) => {
    console.log(`Incoming`);
    var photoUpload = await photo();

    res.send(photoUpload);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
}); 