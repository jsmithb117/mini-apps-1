const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/f1', (req, res, next) => {
  console.log('f1req.body: ', req.body);
  res.end();
})

app.post('/f2', (req, res, next) => {
  console.log('f2req.body: ', req.body);
  res.end();
})

app.post('/f3', (req, res, next) => {
  console.log('f3req.body: ', req.body);
  res.end();
})

app.post('/purchase', (req, res, next) => {
  console.log('purchase req.body: ', req.body);
  db.Multi.create(req.body, (err, response) => {
    if (err) {
      console.error(err);
    }
    console.log('db response: ', response);
    res.send(response);
  })
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})