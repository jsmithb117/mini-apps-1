module.exports = (toParse) => {
    var csv = '';
    for (let elem in toParse) { //parse field names
      if (elem !== 'sales' && elem !== 'children') {
        csv = csv.concat(elem, ',');
      }
      if (elem === 'sales') {
        csv = csv.concat(elem, '\n');
      }
    }
    var parseObject = (obj) => {
      for (let elem in obj) {
        if (elem !== 'sales' && elem !== 'children') {
          csv = csv.concat(obj[elem], ',');
        } else if (elem === 'sales') {
          csv = csv.concat(obj[elem], '\n');
        } else {
          parseArray(obj[elem]);
        }
      }
    }
      var parseArray = (array) => {
      for(let elem of array) {
        parseObject(elem);
      }
    };
    parseObject(toParse);
    return csv
  }
  // return parseIt(req.body);
