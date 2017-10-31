import React from 'react';
import { Link } from 'react-router-dom'

function OneWay (props) {

  return (
    <div>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">Select Ticket</h2>
      </div>
      <div className="animated slideInRight">
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin.toUpperCase()}</div>
          <div className="origin-destination-middle fa fa-long-arrow-right" id="arrow-right"></div>
          <div className="origin-destination-third">{props.clickedDestination.toUpperCase()}</div>
          <div className="origin-destination-third">{props.ticketType.toUpperCase()}</div>
        </div>
        <div>
          <div>Single</div>
          <div>Multiple</div>
        </div>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Peak, $10.25">
            <div>Peak</div>
            <div>$10.25<span>{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Off Peak, $7.25">
            <div>Off Peak</div>
            <div>$7.25<span>{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Senior, $5.00">
            <div>Senior</div>
            <div >$5.00<span>{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Family, $1.00">
            <div>Family</div>
            <div >$1.00<span>{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Military, $7.50">
            <div>Military</div>
            <div >$7.50<span>{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Disable, $5.00">
            <div>Disabled / Medicare</div>
            <div >$5.00<span>{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Child Peak, $5.00">
            <div>Child Peak</div>
            <div>$5.00<span>{'>'}</span></div>
          </div>
        </Link>
        <Link to='/accept'>
          <div className="button" onClick={props.handleTicket} id="Child Off, $3.50">
            <div>Child Off Peak</div>
            <div>$3.50<span>{'>'}</span></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default OneWay;
