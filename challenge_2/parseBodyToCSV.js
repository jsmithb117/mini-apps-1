module.exports = (input) => {
  var parsedInput = JSON.parse(input);
  var csv = '';
  var properties = [];
  ////first step: push all property names in entire data to 'properties'
  //create function 'addProperties' to add all properties to properties array
    //iterate parsedInput (for of, elem)
      //if properties does not include elem and elem is not children
        //push elem to properties
      //if elem is children
        //recurse for each child
  ////All properties are set
  //create function 'addValues' to iterate all elements and append each value to csv where appropriate (child)
    //iterate properties
      //if 'child' includes properties[i]
        //if properties is not last
          //append value and a comma to csv
        //else
          //append value to csv
      //else if properties is not last
        //append a comma to csv
    //iterate children
      //recurse each child
  //invoke addProperties
  //invoke addValues with parsedInput

  return csv
};

// module.exports = (jsonData) => {
//   var parsedData = JSON.parse(jsonData);
//   var csv = '';
//   var csvConcat = (...args) => csv = csv.concat(...args);
//   for (let elem in parsedData) { //parse field names
//     if (elem !== 'sales' && elem !== 'children') {
//       csvConcat(elem, ',');
//     }
//     if (elem === 'sales') {
//       csvConcat(elem, '\n');
//   }}
//   var parseObject = (obj) => {
//     for (let elem in obj) {
//       if (elem !== 'sales' && elem !== 'children') {
//         csvConcat(obj[elem], ',');
//       } else if (elem === 'sales') {
//         csvConcat(obj[elem], '\n');
//       } else {
//         parseArray(obj[elem]);
//   }}};
//     var parseArray = (array) => {
//     for(let elem of array) {
//       parseObject(elem);
//   }};
//   parseObject(parsedData);
//   return csv
// };