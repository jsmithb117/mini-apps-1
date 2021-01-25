var loadEmptyBoard = (size = 3) => {
  // debugger;
  var board = document.getElementById('board');
  var boardElement = size * 2 - 1;
  var elementToPlace;
  //create a reference to 'board' node
  var board = document.getElementById('board');
  //create a <table> element as a child of 'board'
  var table = document.createElement("table");
  var elementToAppend;
  for (let row = 1; row <= boardElement; row++) {
      var tableRow = document.createElement("table-row");
      tableRow.setAttribute("id", `${row}`);
      //create a <tr> element with id as ${row}
      for (let column = 1; column <= boardElement; column++) {
        //create a <td> element with id as ${row}${column}
        var tableElement = document.createElement("td");
        tableElement.setAttribute("id", `${row}${column}`);
        //if column is even, create a verticalDivider
        if (column % 2 === 0) {
          elementToAppend = document.createTextNode('|');
          //else if row is odd, place a boardPlace
        } else if (row % 2 === 0) {
          elementToAppend = document.createTextNode('---');
          //else (row is even, column is even), place a horizontalDivider
        } else {
          // elementToAppend = document.createTextNode('X\u00A0');
          elementToAppend = document.createTextNode('\u00A0\u00A0\u00A0\u00A0');
        }
        //append elementToAppend to tableRow
        tableRow.appendChild(elementToAppend);
      }
      table.appendChild(tableRow);
      table.appendChild(document.createElement("br"));
    }
    board.appendChild(table);
};

loadEmptyBoard();