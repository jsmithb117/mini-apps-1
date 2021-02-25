import React from 'react';
import Board from './Board.jsx';
import Display from './Display.jsx';
import { checkCols, checkDiags, checkRows, checkTie } from './checks.js';

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
    var colsWinner = checkCols(this.state.board);
    var rowsWinner = checkRows(this.state.board);
    var diagsWinner = checkDiags(this.state.board);

    var winner = colsWinner ? colsWinner
    : rowsWinner ? rowsWinner
    : diagsWinner ? diagsWinner
    : null;
    if (winner) {
      this.setState({ winner });
    } else {
      var isTie = checkTie(this.state.board);
      if (isTie) {
        this.setState({ message: "It's a tie!" });
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