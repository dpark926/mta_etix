const DISCLAIMERS = [
  {
    ticket: 'ten-trip',
    options: [
      {
        ticketType: 'peak',
        price: '$102.50',
        disclaimer: '<li>Good for ten one-way rides to/from City Zone 1 only.<\/li>
                    <li>Valid for 6 month (including date of sale.).<\/li>
                    <li>Tickets are transferable.<\/li>
                    <li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.<\/li>
                    <li>Ticket must be activated prior to boarding train for use.<\/li>
                    <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.<\/li>
                    <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.<\/li>
                    <li>Subject to applicable tariff regulations and conditions of use.<\/li>'
      },
      {
        ticketType: 'off-peak',
        price: '$63.75',
        disclaimer: '<li>Good for ten one-way Off-Peak rides to/from City Zone 1 only during off-peak hours only and is subject to step-up on Peak trains.<\/li>
                    <li>Valid for 6 month (including date of sale.).<\/li>
                    <li>Tickets are transferable.<\/li>
                    <li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.<\/li>
                    <li>Ticket must be activated prior to boarding train for use.<\/li>
                    <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.<\/li>
                    <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.<\/li>
                    <li>Subject to applicable tariff regulations and conditions of use.<\/li>'
      },
      {
        ticketType: 'senior',
        price: '$50.00',
        disclaimer: '<li>Good for ten one-way rides between the zones or stations indicated on the ticket.<\/li>
                    <li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.<\/li>
                    <li>Seniors must be 65 or older and show valid ID.<\/li>
                    <li>Disabilities & Medicare must show valid Medicare card or MTA reduced fare metrocard.<\/li>
                    <li>Valid for 6 month (including date of sale.).<\/li>
                    <li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.<\/li>
                    <li>Ticket must be activated prior to boarding train for use.<\/li>
                    <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.<\/li>
                    <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.<\/li>
                    <li>Subject to applicable tariff regulations and conditions of use.<\/li>'
      }
    ]
  },
  {
    ticket: 'monthly',
    ticketType: '',
    disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket durring off-peak hours only and is subject to step-up on Peak trains.<\/li>
                <li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.<\/li>
                <li>Valid for 60 days (including date of sale).<\/li>
                <li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.<\/li>
                <li>Ticket must be activated prior to boarding train for use.<\/li>
                <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.<\/li>
                <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.<\/li>
                <li>Subject to applicable tariff regulations and conditions of use.<\/li>'
  },
  {
    ticket: 'one-way',
    ticketType: '',
    disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket durring off-peak hours only and is subject to step-up on Peak trains.<\/li>
                <li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.<\/li>
                <li>Valid for 60 days (including date of sale).<\/li>
                <li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.<\/li>
                <li>Ticket must be activated prior to boarding train for use.<\/li>
                <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.<\/li>
                <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.<\/li>
                <li>Subject to applicable tariff regulations and conditions of use.<\/li>'
  },
  {
    ticket: 'round-trip',
    ticketType: '',
    disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket durring off-peak hours only and is subject to step-up on Peak trains.<\/li>
                <li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.<\/li>
                <li>Valid for 60 days (including date of sale).<\/li>
                <li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.<\/li>
                <li>Ticket must be activated prior to boarding train for use.<\/li>
                <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.<\/li>
                <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.<\/li>
                <li>Subject to applicable tariff regulations and conditions of use.<\/li>'
  },
  {
    ticket: 'weekly',
    ticketType: '',
    disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket durring off-peak hours only and is subject to step-up on Peak trains.<\/li>
                <li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.<\/li>
                <li>Valid for 60 days (including date of sale).<\/li>
                <li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.<\/li>
                <li>Ticket must be activated prior to boarding train for use.<\/li>
                <li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.<\/li>
                <li>Once activated, ticket will expire after a predetermined length of time for the trip selected.<\/li>
                <li>Subject to applicable tariff regulations and conditions of use.<\/li>'
  }
]