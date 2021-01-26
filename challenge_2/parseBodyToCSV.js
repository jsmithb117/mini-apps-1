module.exports = (req, res, next) => {
  var parseIt = (toParse) => {
    var csv = '';
    //toParse can be a children array or object
    //if children array
    if (Array.isArray(toParse)) {
      //iterate array (for, i)
      for (let i = 0; i < toParse.length; i++) {
        //for of loop (elem, toParse[i])
        console.log(typeof toParse[i]);
        console.log(Array.isArray(toParse[i]));
        console.log(toParse[i]);
        for (let elem in toParse[i]) {
          //if elem is children
          if (elem === 'children') {
            //concat csv to recursed children
            csv = csv.concat(toParse[i][elem])
            //else
          } else {
            //concat value to csv
            csv = csv.concat(toParse[i][elem]);
      }}}
    //else
    } else {
      // console.log(typeof toParse)
      // console.log(toParse);
      //for of loop (elem, toParse)
      for (let elem in toParse) {
        //if elem is not children
        if (elem !== 'children') {
          //concat key
          csv = csv.concat(elem);
        }
        //if elem is not sales or children
        if (elem !== 'sales' && elem !== 'children') {
          //concat a comma
          csv = csv.concat(',');
        }
        //if elem is children
        if (elem === 'children') {
          //recurse on children
          csv = csv.concat(parseIt(toParse[elem]));
    }}}
    return csv
  }
  // console.log(csv)
  req.csv = parseIt(req.body);
  next();
}