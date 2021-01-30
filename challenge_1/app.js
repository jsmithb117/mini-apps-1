/////////-----------------------------View---------------------/////////
var places = document.getElementsByClassName('place');
/////////-----------------------------View---------------------/////////
/////////-----------------------------Controller---------------------/////////
var pieceHandler = (elem) => {
  var id = elem.srcElement.attributes.id.nodeValue;
  var xOrO = playerOnesTurn ? 'X' : 'O';
  var node = document.getElementById(id);
  node.innerHTML = xOrO; //assigns value to board piece
  node.className += ` ${xOrO}`; //attaches the value as an additional class, used for 'announceWinner'
  playerOnesTurn = !playerOnesTurn;
  checkBoard();
};

var resetHandler = () => {
  boardReset();
};

var checkBoard = () => { //Uses checkRow to check if there is a winner after each turn
  var board = [[], [], []];
  for (elem of places) {
    board[elem.id[0] - 1].push(elem.innerHTML);
  }
  var rowOne = [board[0][0], board[1][0], board[2][0]];
  var rowTwo = [board[0][1], board[1][1], board[2][1]];
  var rowThree = [board[0][2], board[1][2], board[2][2]];
  var diagOne = [board[0][0], board[1][1], board[2][2]];
  var diagTwo = [board[2][0], board[1][1], board[0][2]];
  checkRow(rowOne, rowTwo, rowThree); //checks horizontal rows (rows)
  checkRow(board[0], board[1], board[2]); //checks vertical rows (columns)
  checkRow(diagOne, diagTwo); //checks diagonal rows (diagonals)
};

var checkRow = (...rows) => {
  var rowXcount = rowOcount = totalCount = 0;
  for(let row of rows) {
    row.map((elem) => {
      rowXcount = (elem === 'X') ? rowXcount + 1 : rowXcount;
      rowOcount = (elem === 'O') ? rowOcount + 1 : rowOcount;
      totalCount += (elem === 'X' || elem === 'O') ? 1 : 0;
    })
    if (rowXcount === 3) {
      announceWinner('X');
      break;
    } else if (rowOcount === 3) {
      announceWinner('O');
      break;
    } else if (totalCount === 9) {
      announceDraw();
      break;
    } else { //reset for next row
      rowXcount = rowOcount = 0;
    }
  }
};

var announceWinner = (xOrO) => {
  var notXorO = xOrO === 'X' ? 'O' : 'X';
  for (let elem of document.getElementsByClassName(xOrO)) {
    elem.style.color = 'green';
    console.dir(elem);
  };
  for (let elem of document.getElementsByClassName(notXorO)) {
    elem.style.color = 'red';
  }
  var winNode = document.createElement('p');
  winNode.innerHTML = `${xOrO} is the winner!`;
  winNode.id = 'win';
  document.getElementById('board').append(winNode);
};

var announceDraw = () => {
  for (let elem of document.getElementsByClassName('place')) {
    elem.style.color = 'indigo';
  }
  var oldNode = document.getElementById('tie');
  if(oldNode) {
    oldNode.removeChild();
  }
  var drawNode = document.createElement('p');
  drawNode.innerHTML = `Tie!`;
  drawNode.id = 'tie';
  document.getElementById('board').append(drawNode);
};

var boardReset = () => {
  for (let elem of places) {
    elem.innerHTML = '';
    elem.className = 'place';
    elem.style.color = 'black';
    playerOnesTurn = true;
  }
  var winNode = document.getElementById('win');
  var tieNode = document.getElementById('tie');
  if (winNode) {
    document.getElementById('board').removeChild(winNode);
  }
  if (tieNode) {
    tieNode.remove();
  }
};
/////////-----------------------------Controller---------------------/////////
/////////-----------------------------Model---------------------/////////
var attachHandlers = (() => {
  for (let elem of places) {
    elem.onclick = pieceHandler;
  }
  document.getElementById('reset-button').onclick = resetHandler;
})();

var playerOnesTurn = true;
/////////-----------------------------Model---------------------/////////