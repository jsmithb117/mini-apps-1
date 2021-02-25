import React from 'react';

var Display = (props) => {
var message = props.winner ? `${props.winner} is the winner!`
  : props.message !== "It's a tie!" ? `It's ${props.turn}'s turn.`
  : props.message;
var turn = props.winner ? `winner${props.winner}` : props.turn;

return (
    <div className="Display">
      <div className="instructions">Click a column to drop a piece</div>
      <div className={turn}>{message} </div>
    </div>
  )
};

export default Display;