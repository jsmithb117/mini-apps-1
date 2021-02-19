import React from 'react';
import Board from './Board.jsx';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [ //[color, col, row]
        [['white', 0, 0], ['white', 0, 1], ['white', 0, 2], ['white', 0, 3], ['white', 0, 4], ['white', 0, 5]],
        [['white', 1, 0], ['white', 1, 1], ['white', 1, 2], ['white', 1, 3], ['white', 1, 4], ['white', 1, 5]],
        [['white', 2, 0], ['white', 2, 1], ['white', 2, 2], ['white', 2, 3], ['white', 2, 4], ['white', 2, 5]],
        [['white', 3, 0], ['white', 3, 1], ['white', 3, 2], ['white', 3, 3], ['white', 3, 4], ['white', 3, 5]],
        [['white', 4, 0], ['white', 4, 1], ['white', 4, 2], ['white', 4, 3], ['white', 4, 4], ['white', 4, 5]],
        [['white', 5, 0], ['white', 5, 1], ['white', 5, 2], ['white', 5, 3], ['white', 5, 4], ['white', 5, 5]],
        [['white', 6, 0], ['white', 6, 1], ['white', 6, 2], ['white', 6, 3], ['white', 6, 4], ['white', 6, 5]]
      ],
      turn: 'red',
      message: '',
      winner: null
    }
  };

  swapPlayer(player) {
    var next = player === 'red' ? 'blue' : 'red';
    this.setState({ turn: next });
  };

  dropPiece(col, player) { //player is 'red' or 'blue'
    var board = [...this.state.board];
    var changed = false;
    this.setState({ message: '' });
    for (let row = 5; row >= 0; row--) {
      if (board[col][row][0] === 'white') {
        board[col][row][0] = player;
        this.swapPlayer(player);
        changed = true;
        break;
      }
    }
    changed ? this.setState({ board }) : this.setState({ message: 'Invalid move!' });
    this.checkCols();
    this.checkRows();
    this.checkDiags();
  };

  checkCols() {
    let winner = '';
    let board = [...this.state.board];
    for (let col = 0; col <= 6; col++) { //iterate board by cols
      let currentPlayer = '';
      let count = 0;
      for (let row = 0; row <= 5; row++) {
        let piece = board[col][row];
        if (currentPlayer === '' && piece[0] !== 'white') {
          currentPlayer = piece[0];
          count++;
        } else {
          if (currentPlayer === piece[0]) {
            count++;
          } else if (piece[0] !== 'white') {
            count = 1;
            currentPlayer = piece[0];
          }
          if (count >= 4) {
            winner = currentPlayer;
            this.setState({ winner });
          }
        }
      }
    }
  };

  checkDiags() {
    let board = this.state.board;
    let majorDiags = {};
    let minorDiags = {};
    let majorBegins = [[0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [3, 0]];
    //for [0,2] (major)
    //[0,2], [1,3], [2,4], 3,5]
    //for [3,5] (minor)
    //[3,5], [4,4], [5,3], [6,2]
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

        if (minorPiece[0] !== 'white') {
          if (minorDiags[elem].currentPlayer === minorPiece[0]) {
            minorDiags[elem].count++;
          } else {
            minorDiags[elem].currentPlayer = minorPiece[0];
            minorDiags[elem].count++;
          }
        }

        if (minorDiags[elem].count >= 4) {
          var winner = minorDiags[elem].currentPlayer;
          this.setState({ winner });
          break;
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

        if (majorPiece[0] !== 'white') {
          if (majorDiags[elem].currentPlayer === majorPiece[0]) {
            majorDiags[elem].count++;
          } else {
            majorDiags[elem].currentPlayer = majorPiece[0];
            majorDiags[elem].count++;
          }
        }

        if (majorDiags[elem].count >= 4) {
          var winner = majorDiags[elem].currentPlayer;
          this.setState({ winner });
          break;
        }

        majorX++;
        majorY++;
      }
    }
  };


  checkRows() {
    let winner;
    let board = [...this.state.board];
    let rows = {};
    for (let i = 0; i <= 6; i++) { //populate rows to look like {0: {currentPlayer: '', count: 0} ... 6: {currentPlayer: '', count: 0}}
      rows[i] = {
        currentPlayer: null,
        count: 0
      }
    }
    for (let i = 0; i < board.length; i++) {
      if (this.state.winner) {
        break;
      }
      for (let j = 0; j < board[i].length; j++) {
        let piece = board[i][j];
        if (piece[0] !== 'white') {
          if (rows[piece[2]].currentPlayer === piece[0]) {
            rows[j].count++;
          } else {
            rows[j].currentPlayer = piece[0];
            rows[j].count = 1;
          }
          if (rows[j].count >= 4) {
            winner = rows[j].currentPlayer;
            this.setState({ winner });
            console.log('board: ', board);
            break;
          }
        }
      }
    }
  };

  render() {
    return (
      <div className="app">
        <div className="title">Connect Four</div>
        <Board board={this.state.board} dropPiece={this.dropPiece.bind(this)} turn={this.state.turn} winner={this.state.winner} />
        <Display turn={this.state.turn} message={this.state.message} winner={this.state.winner} />
      </div>
    )
  }
}

export default App;