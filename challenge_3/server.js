const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/f1', (req, res, next) => {
  console.log('req.body: ', req.body);
  res.send('sent stuff');
})


app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})