import React from 'react'
import '../styles/Button.css'

function Button(props) {
  if (props.clicked) {
    return (
      <div className='half-circle' onClick={props.handleClick}>
        <i className="fa fa-angle-up"></i>
      </div>
    )
  }else {
    return (
      <div className='half-circle' onClick={props.handleClick}>
        <i className="fa fa-angle-down"></i>
      </div>
    )
  }
}

export default Button
