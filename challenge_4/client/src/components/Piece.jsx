import React from 'react';

var Piece = (props) => {

  if (props.winner) {
    return (
      <div className={props.piece[0]}>
        O
      </div>
    )
  } else {
    return (
      <div className={props.piece[0]} onClick={() => {
        props.dropPiece(props.piece[1], props.turn);
      }}>
        O
      </div>
)}};

export default Piece;