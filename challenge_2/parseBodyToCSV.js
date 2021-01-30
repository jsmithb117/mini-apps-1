module.exports = (input) => {
  var parsedInput = JSON.parse(input);
  var csv = '';
  var properties = [];
  var conc = (...args) => csv = csv.concat(...args);

  var addProperties = (elem) => {
    for (let item in elem) {
      if (!properties.includes(item) && item !== 'children') {
        properties.push(item);
      } else if (item === 'children' && elem[item].length > 0) {
        var children = elem[item];
        children.forEach((child) => addProperties(child));
      }
    }
    return;
  }

  var addValues = (elem) => {
    var keyNames = Object.getOwnPropertyNames(elem);
    for (let i = 0; i < properties.length; i++) {
      var key = properties[i];
      var value = elem[key];
      var isLast = (JSON.stringify(key) === JSON.stringify(properties[properties.length - 1]));
      var isChildren = key == 'children';
      if (!isChildren) {
        var includes = keyNames.includes(key);
        if (includes && !isLast) {
          conc(value, ',');
        } else if (includes && isLast) {
          conc(value, '\n');
        } else if (!includes && !isLast) {
          conc(',');
        } else if (!includes && isLast) {
          conc('\n');
        }
      }
    }
    if (elem.children && elem.children.length > 0) {
      elem.children.forEach(item => addValues(item));
    }
  }
  addProperties(parsedInput);
  for (let i = 0; i < properties.length; i++) {
    conc(properties[i]);
    if (i < properties.length - 1) {
      conc(',');
    } else {
      conc('\n');
    }
  }
  addValues(parsedInput);
  return csv
};
