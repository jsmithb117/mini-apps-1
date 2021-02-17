const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/f1', (req, res, next) => {
  let f1Data = req.body.event;
  f1Data = Object.assign(f1Data, { purchaseComplete: false });
  db.Multi.create(f1Data, (err, response) => {
    if (err) {
      console.error('Error in POST/F1: ', err);
    }
  })
  res.end();
})

app.post('/f2', (req, res, next) => {
  let filter = req.body.form1Data;
  let update = req.body.form2Data;
  db.Multi.findOneAndUpdate(filter, update, (err, response) => {
    if (err) {
      console.error('Error in POST/F2: ', err);
    }
  })
  res.end();
})

app.post('/f3', (req, res, next) => {
  let filter = req.body.form1Data;
  let update = req.body.form3Data;
  db.Multi.findOneAndUpdate(filter, update, (err, response) => {
    if (err) {
      console.error('Error in POST/F3: ', err);
    }
  })
  res.end();
})

app.post('/purchase', (req, res, next) => {
  let filter = req.body.form1Data;
  let update = { purchaseComplete: true };
  db.Multi.findOneAndUpdate(filter, update, (err, response) => {
    if (err) {
      console.error('Error in POST/F3: ', err);
    }
  })
  res.end();
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})