import React from 'react';
import Row from './Row.jsx';

var Board = (props) => {
  return (
    <div className="board">
      {props.board.map((row, index) => {
        return <Row row={row} key={index} dropPiece={props.dropPiece} turn={props.turn} winner={props.winner} />
      })}
    </div>
  )
};

export default Board;