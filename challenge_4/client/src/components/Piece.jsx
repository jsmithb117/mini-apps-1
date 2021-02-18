import React from 'react';

var Piece = (props) => {

  return (
    <div className={props.piece[0]} onClick={() => {
      props.dropPiece(props.piece[1], props.turn);
    }}>
      {props.piece}
    </div>
  )

};

export default Piece;