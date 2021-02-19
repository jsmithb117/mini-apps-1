import React from 'react';

var Display = (props) => {
var message = props.winner ? `${props.winner} is the winner!` : `It's ${props.turn}'s turn.`;
var turn = props.winner ? `winner${props.winner}` : props.turn;

return (
    <div className="Display">
      <div className="instructions">Click a column to drop a piece</div>
      <div className={turn}>{message} </div>
    </div>
  )
};

export default Display;