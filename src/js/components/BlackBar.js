import React from 'react';
import '../../styles/OriginDest.css';

function BlackBar (props) {
  return (
    <div className="black-bar">
      <div className="yellow-progress" style={ { width: [props.yellowWidth] } }></div>
    </div>
  )
}

export default BlackBar;
