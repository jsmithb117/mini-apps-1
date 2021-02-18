import React from 'react';

var Display = (props) => {
  let turn = props.turn === 'red' ? 'red' : 'blue';
  var message;

  if (props.message) {
    message = props.message;
  } else {
    message = `It's ${turn}'s turn`;
  }


  message = props.winner ? `${props.winner} is the winner!!!` : message;

  return (
    <div className="Display">
      <div className="instructions">Click a column to drop a piece</div>
      <div className={turn}>{message} </div>
    </div>
  )
};

export default Display;