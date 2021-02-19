import React from 'react';

var Display = (props) => {
  // let turn = props.turn === 'red' ? 'red' : 'blue';
  // var message;

  // if (props.message) {
  //   message = props.message;
  // } else {
  //   message = `It's ${turn}'s turn`;
  // }

//if props.winner -> message = `winner is the winner`
//else -> message = props.message
var message = props.winner ? `${props.winner} is the winner!` : `It's ${props.turn}'s turn.`;
var turn = props.winner ? `winner${props.winner}` : props.turn;


//if props.winner -> turn = props.winner
//else turn = props.turn



  // message = props.winner ? `${props.winner} is the winner!!!` : message;

  return (
    <div className="Display">
      <div className="instructions">Click a column to drop a piece</div>
      <div className={turn}>{message} </div>
    </div>
  )
};

export default Display;