const checkCols = (board) => {
  let winner;
  for (let col = 0; col <= 6; col++) { //iterate board by cols
    let currentPlayer;
    let count = 0;
    for (let row = 0; row <= 5; row++) {
      let piece = board[col][row];
      if (piece[0] === currentPlayer) {
        count++;
      } else {
        currentPlayer = piece[0];
        count = 1;
      }
      if (count >= 4 && currentPlayer !== 'white') {
        winner = currentPlayer;
        return winner;
      }
    }
  }
  return winner;
};

const checkDiags = (board) => {
  let winner;
  let majorDiags = {};
  let minorDiags = {};
  let majorBegins = [[0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [3, 0]];
  let minorBegins = [[3, 5], [2, 5], [1, 5], [0, 5], [0, 4], [0, 3]];

  for (let i = 0; i <= 5; i++) {
    //(major, minor)Diags looks like: { 1: {begin: [0,2], currentPlayer: null, count: 0}, ... 5: {begin: [3,0], currentPlayer: null, count: 0}}
    majorDiags[i] = {
      begin: majorBegins.shift(),
      currentPlayer: null,
      count: 0
    }
    minorDiags[i] = {
      begin: minorBegins.shift(),
      currentPlayer: null,
      count: 0
    }
  };

  for (let elem in minorDiags) {
    var minorX = minorDiags[elem].begin[0];
    var minorY = minorDiags[elem].begin[1];

    while (minorX <= 6 && minorY >= 0) {
      var minorPiece = board[minorX][minorY];

      if (minorDiags[elem].currentPlayer === minorPiece[0]) {
        minorDiags[elem].count++;
      } else {
        minorDiags[elem].currentPlayer = minorPiece[0];
        minorDiags[elem].count = 1;
      }


      if (minorDiags[elem].count >= 4 && minorDiags[elem].currentPlayer !== 'white') {
        winner = minorDiags[elem].currentPlayer;
        return winner;
      }

      minorX++;
      minorY--;
    }
  }

  for (let elem in majorDiags) {
    var majorX = majorDiags[elem].begin[0];
    var majorY = majorDiags[elem].begin[1];

    while (majorX <= 6 && majorY <= 5) {
      var majorPiece = board[majorX][majorY];

      if (majorDiags[elem].currentPlayer === majorPiece[0]) {
        majorDiags[elem].count++;
      } else {
        majorDiags[elem].currentPlayer = majorPiece[0];
        majorDiags[elem].count = 1;
      }

      if (majorDiags[elem].count >= 4 && majorDiags[elem].currentPlayer !== 'white') {
        winner = majorDiags[elem].currentPlayer;
        return winner;
        break;
      }

      majorX++;
      majorY++;
    }
  }
  return winner;
};


const checkRows = (board) => {
  let winner;
  let rows = {};
  for (let i = 0; i < 6; i++) { //populate rows to look like {0: {currentPlayer: '', count: 0} ... 6: {currentPlayer: '', count: 0}}
    rows[i] = {
      currentPlayer: null,
      count: 0
    }
  }
  for (let i = 0; i < board.length; i++) { //iterate cols
    for (let j = 0; j < board[i].length; j++) { //iterate rows
      let piece = board[i][j]; //['white', col, row]
      if (rows[j].currentPlayer === piece[0]) {
        rows[j].count++;
      } else {
        rows[j].currentPlayer = piece[0];
        rows[j].count = 1;
      }

      if (rows[j].count >= 4 && rows[j].currentPlayer !== 'white') {
        winner = rows[j].currentPlayer;
        return winner;
      }
    }
  }
  return winner;
};

  const checkTie = (board) => {
    for (let col = 0; col < board.length; col++) {
      for (let row = 0; row < board[col].length; row++) {
        if (board[col][row][0] === 'white') {
          return false;
        }
      }
    }
    return true;
  }

export { checkCols, checkDiags, checkRows, checkTie };