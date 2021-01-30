module.exports = (input) => {
  var parsedInput = JSON.parse(input);
  var csv = '';
  var properties = [];
  var conc = (...args) => csv = csv.concat(...args);

  var addProperties = (elem) => {
    for (let item in elem) {
      console.log('item: ', item);
      if (!properties.includes(item) && item !== 'children') {
        console.log('adding property: ', item);
        properties.push(item);
      } else if (item === 'children' && elem[item].length > 0) {
        var children = elem[item];
        console.log('children: ', children);
        children.forEach((child) => addProperties(child));
      }
    }
    // console.log(properties);

    return;
  }

  var addValues = (elem) => {
    var keyNames = Object.getOwnPropertyNames(elem);
    for (let i = 0; i < properties.length; i++) {
      // for (let prop in elem) {

      var key = properties[i];
      var value = elem[key];
      console.log('key: ', key);
      console.log('value: ', value);

      // if (elem[key]) {
      // var prop = properties[i];
      console.log(`checking prop in elem: ${key}: ${elem[key]}`)


      var isLast = (JSON.stringify(key) === JSON.stringify(properties[properties.length - 1]));
      console.log('last property: ', properties[properties.length - 1]);
      var isChildren = key == 'children';
      if (!isChildren) {
        var includes = keyNames.includes(key);
        // var item = elem[key];
        // console.log('properties includes key: ', includes);
        // console.log('isChildren: ', isChildren);
        // console.log('isLast: ', isLast);
        // console.log('\n');

        //includes & isNotlast
        if (includes && !isLast) {
          //concat key + ,
          conc(value, ',');
          //includes & isLast
        } else if (includes && isLast) {
          //concat key + newline
          conc(value, '\n');
          //notIncludes & isNotLast
        } else if (!includes && !isLast) {
          //concat comma
          conc(',');
          //notIncludes & isLast
        } else if (!includes && isLast) {
          //concat newline
          conc('\n');
        }
        // }
        // }

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
