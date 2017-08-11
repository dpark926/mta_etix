import React from 'react'
import { Link } from 'react-router-dom'

function Activate (props) {
  return (
    <div className='activate-box animated jello' onClick={props.handleActivate}>
      <Link to='/access'><div className='text'><h1>Activate!</h1></div></Link>
    </div>
  )
}

export default Activate
