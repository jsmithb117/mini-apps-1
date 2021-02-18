import React from 'react';

var Display = (props) => {
  return (
    <div className="Display">
      <div className="instructions">Click a column to drop a piece</div>
      <div className="turn">It is {props.turn}'s turn</div>
      <div className="message">{props.message}</div>
    </div>
  )
};

export default Display;