import React from 'react';
import Piece from './Piece.jsx';

var Row = (props) => {
  return (
    <div className="row">
      {props.row.map((piece, innerIndex) => {
        return <Piece piece={piece} key={innerIndex} dropPiece={props.dropPiece} turn={props.turn} winner={props.winner} />
      })}
    </div>
  )
};

export default Row;