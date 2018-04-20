import React from 'react';
import '../../styles/Accept.css';
import DISCLAIMERS from '../data/DISCLAIMERS';

function Disclaimer ( props ) {
  const defaultMsg = (
    <ul>
      <li>Good for one ride between the zones or stations indicated on the ticket durring off-peak hours only and is subject to step-up on Peak trains.</li>
      <li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.</li>
      <li>Valid for 60 days (including date of sale).</li>
      <li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</li>
      <li>Ticket must be activated prior to boarding train for use.</li>
      <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li>
      <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li>
      <li>Subject to applicable tariff regulations and conditions of use.</li>
    </ul>
  )

  const result = DISCLAIMERS.filter( obj =>
    obj.ticket === props.ticketType.replace(/\s+/g, '-').toLowerCase()
  )

  if ( !result || result.length === 0 ) {
    return defaultMsg;
  }

  const disclaimerResult = result[0].options.filter( obj =>
    obj.ticketType === props.ticket.replace(/\s+/g, '-').toLowerCase()
  )

  if ( !disclaimerResult || disclaimerResult.length === 0 ) {
    return defaultMsg;
  } else {
    return (
      <ul dangerouslySetInnerHTML={{ __html: disclaimerResult[0].disclaimer }}></ul>
    );
  }
}

export default Disclaimer;
