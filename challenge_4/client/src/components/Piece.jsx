import React from 'react';

var Piece = (props) => {
  var item = props.piece[2] === 0 ? 'O' : 'o';
  if (props.winner) {
    return (
      <div className={props.piece[0]}>
        O
      </div>
    )
  } else {
    return (
      <div className={`${props.piece[0]} ${props.piece[1]} ${props.piece[2]}`} onClick={() => {
        props.dropPiece(props.piece[1], props.turn);
      }}>
        {item}
      </div>
)}};

export default Piece;