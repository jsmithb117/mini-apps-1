module.exports = (jsonData) => {
  // console.log('jsonData from parseBody')
  // console.log(jsonData);
  var parsedData = JSON.parse(jsonData);
  // console.log ('Parsed data?')
  // console.log(parsedData);
  var csv = '';
  var csvConcat = (...args) => csv = csv.concat(...args);
  for (let elem in parsedData) { //parse field names
    if (elem !== 'sales' && elem !== 'children') {
      csvConcat(elem, ',');
    }
    if (elem === 'sales') {
      csvConcat(elem, '\n');
  }}
  var parseObject = (obj) => {
    for (let elem in obj) {
      if (elem !== 'sales' && elem !== 'children') {
        csvConcat(obj[elem], ',');
      } else if (elem === 'sales') {
        csvConcat(obj[elem], '\n');
      } else {
        parseArray(obj[elem]);
  }}};
    var parseArray = (array) => {
    for(let elem of array) {
      parseObject(elem);
  }};
  parseObject(parsedData);
  return csv
};