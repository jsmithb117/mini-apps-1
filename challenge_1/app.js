var places = document.getElementsByClassName('place');

var playerOnesTurn = true;

var checkColsRows = (...rows) => {
  // debugger;
  var rowXcount = 0;
  var rowOcount = 0;
  for(let row of rows) {
    row.map((elem) => {
      if (elem === 'X') {
        rowXcount++;
      } else if (elem === 'O') {
        rowOcount++;
      }
    })
    if (rowXcount === 3) {
      announceWinner('X');
    } else if (rowOcount === 3) {
      announceWinner('O');
    } else {
      rowXcount = 0;
      rowOcount = 0;
    }
  }
};

// var checkRows = (col1, col2, col3) => {

// };

var checkDiags = (board) => {

};

var announceWinner = (xOrO) => {
  var xOrO, notXorO;
  if (xOrO === 'X') {
    xOrO = 'X';
    notXorO = 'O'
  } else if (xOrO === 'O') {
    xOrO = 'O';
    notXorO = 'X';
  }
  debugger;
  var greens = document.getElementsByClassName(xOrO);
  var reds = document.getElementsByClassName(notXorO);
  for (let elem of greens) {
    elem.style.color = 'green';
  };
  for (let elem of reds) {
    elem.style.color = 'red';
  }
};



var checkBoard = () => {
  // debugger;
  var board = [[], [], []];
  for (elem of places) {
    board[elem.id[0] - 1].push(elem.innerHTML);
  }
  checkColsRows(board[0], board[1], board[2]);
  var rowOne = [board[0][0], board[1][0], board[2][0]];
  var rowTwo = [board[0][1], board[1][1], board[2][1]];
  var rowThree = [board[0][2], board[1][2], board[2][2]];
  checkColsRows(rowOne, rowTwo, rowThree);

};


var clickHandler = (elem) => {
  // debugger;
  var id = elem.srcElement.attributes.id.nodeValue;
  var xOrO;
  if (playerOnesTurn) {
    xOrO = 'X';
  } else {
    xOrO = 'O';
  }
  var element = document.getElementById(id)
  element.innerHTML = xOrO;
  element.className += ` ${xOrO}`;
  playerOnesTurn = !playerOnesTurn;
  checkBoard();
}

for (let elem of places) {
  // debugger;
  console.log(elem.attributes);
  console.log(elem.attributes.id.nodeValue);
  // elem.addEventListener('click', clickHandler());
  elem.onclick = clickHandler;
}
