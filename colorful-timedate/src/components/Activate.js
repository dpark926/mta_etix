import React from 'react'

function Activate (props) {
  return (
    <div className='activate-circle' onClick={props.handleActivate}>
      <a href='#'><div className='text'><h1>Activate!</h1></div></a>
    </div>
  )
}

export default Activate
