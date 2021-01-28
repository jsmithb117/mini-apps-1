const express = require('express');
const bodyParser = require('body-parser');
const CSV = require ('./parseBodyToCSV');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', (req, res, next) => {
  var rawData = req.body["JSON data"];
  var data = CSV(rawData);
  res.writeHead(200, { 'Content-Type': 'text/csv' });
  res.end(data);
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'challenge_2', '../client', 'index.html'));
});

app.get('/:file', (req, res, next) => {
  console.log('served file');
  var options = {
    root: path.join(__dirname, 'challenge_2', '../client'),
  };
  var fileName = req.params.file;
  res.sendFile(fileName, options);
})

// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

//Must serve ../client/index.html (get request at '/')

//O - CSV reports
//I - JSON data
//C -
  //must serve ../client/index.html
  //must flatten JSON data
  //keys of JSON will be columns for CSV report
//E - ?