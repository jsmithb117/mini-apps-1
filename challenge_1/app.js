/////////-----------------------------View---------------------/////////
var places = document.getElementsByClassName('place');
/////////-----------------------------View---------------------/////////



/////////-----------------------------Controller---------------------/////////
var clickHandler = (elem) => {
  var id = elem.srcElement.attributes.id.nodeValue;
  var xOrO = playerOnesTurn ? 'X' : 'O';
  var node = document.getElementById(id);
  node.innerHTML = xOrO; //assigns value to board piece
  node.className += ` ${xOrO}`; //attaches the value as an additional class, used for 'announceWinner'
  playerOnesTurn = !playerOnesTurn;
  checkBoard();
};

var checkBoard = () => { //Uses checkCRD to check if there is a winner after each turn
  var board = [[], [], []];
  for (elem of places) {
    board[elem.id[0] - 1].push(elem.innerHTML);
  }
  checkCRD(board[0], board[1], board[2]); //checks columns
  var rowOne = [board[0][0], board[1][0], board[2][0]];
  var rowTwo = [board[0][1], board[1][1], board[2][1]];
  var rowThree = [board[0][2], board[1][2], board[2][2]];
  checkCRD(rowOne, rowTwo, rowThree); //checks rows
  var diagOne = [board[0][0], board[1][1], board[2][2]];
  var diagTwo = [board[2][0], board[1][1], board[0][2]];
  checkCRD(diagOne, diagTwo); //checks diagonals
};

var checkCRD = (...rows) => { //checks each row/column, or diagonal depending on how many elements are passed in.
  var rowXcount = rowOcount = totalCount = 0;
  for(let row of rows) {
    // debugger;
    row.map((elem) => {
      rowXcount = (elem === 'X') ? rowXcount + 1 : rowXcount;
      rowOcount = (elem === 'O') ? rowOcount + 1 : rowOcount;
      totalCount += (elem === 'X' || elem === 'O') ? 1 : 0;
    })
    if (rowXcount === 3) {
      announceWinner('X');
    } else if (rowOcount === 3) {
      announceWinner('O');
    } else if (totalCount === 9) {
      // debugger;
      announceDraw();
    } else { //reset for next row
      rowXcount = rowOcount = 0;
    }
  }
};

var announceWinner = (xOrO) => { //self explanatory
  var notXorO = xOrO === 'X' ? 'O' : 'X';
  for (let elem of document.getElementsByClassName(xOrO)) {
    elem.style.color = 'green';
    console.dir(elem);
  };
  for (let elem of document.getElementsByClassName(notXorO)) {
    elem.style.color = 'red';
  }
};

var announceDraw = () => {
  // debugger;
  for (let elem of document.getElementsByClassName('place')) {
    elem.style.color = 'indigo';
  }
}

var boardReset = () => {
  for (let elem in places) {
    elem.innerHTML = '';
    elem.className = 'place';
  }
}
/////////-----------------------------Controller---------------------/////////

/////////-----------------------------Model---------------------/////////
var createNewBoard = () => { //only assigns clickHandlers for now
  for (let elem of places) {
    elem.onclick = clickHandler;
  }
};

var playerOnesTurn = true;

createNewBoard();
/////////-----------------------------Model---------------------/////////