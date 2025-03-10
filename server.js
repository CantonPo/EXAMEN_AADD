const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
app.use(express.json());
const path = require('path');

const APIKEY = "123456";

app.get('/', (req, res) => {
  res.send('Bienvenido');
})



const options = {
  key: fs.readFileSync(path.join(__dirname, 'privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'fullchain.pem'))
};

https.createServer(options, app).listen(3000, () => {
  console.log('Server started on https://dev9.cyberbunny.online:3000');
});