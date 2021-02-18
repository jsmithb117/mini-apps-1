import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [['red', 0, 0], ['blue', 1, 0], ['white', 2, 0], ['white', 3, 0], ['white', 4, 0], ['white', 0, 0], ['white', 6, 0]],
        [['white', 0, 1], ['white', 1, 1], ['white', 2, 1], ['white', 3, 1], ['white', 1, 1], ['white', 5, 1], ['white', 6, 1]],
        [['white', 0, 2], ['white', 1, 2], ['white', 2, 2], ['white', 3, 2], ['white', 2, 2], ['white', 5, 2], ['white', 6, 2]],
        [['white', 0, 3], ['white', 1, 3], ['white', 2, 3], ['white', 3, 3], ['white', 3, 3], ['white', 5, 3], ['white', 6, 3]],
        [['white', 0, 4], ['white', 1, 4], ['white', 2, 4], ['white', 3, 4], ['white', 4, 4], ['white', 5, 4], ['white', 6, 4]],
        [['white', 0, 5], ['white', 1, 5], ['white', 2, 5], ['white', 3, 5], ['white', 5, 5], ['white', 5, 5], ['white', 6, 5]],
        ]
    }
  }

  // changePiece(x, y, user) { //user is 'red' or 'blue'
  //   var newBoard = this.state.board;
  //   newBoard[y][x][0] = user;
  //   this.setState({ board: newBoard });
  // };

  render() {
    return (
      <div className="app">
        <div className="title">Connect Four</div>
        <Board board={this.state.board} />
      </div>
    )
  }
}

export default App;