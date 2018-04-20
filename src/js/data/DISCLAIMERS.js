const DISCLAIMERS = [
  {
    ticket: 'ten-trip',
    options: [
      {
        ticketType: 'peak',
        price: '$102.50',
        disclaimer: '<li>Good for ten one-way rides to/from City Zone 1 only.</li><li>Valid for 6 month (including date of sale.).</li><li>Tickets are transferable.</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'off-peak',
        price: '$63.75',
        disclaimer: '<li>Good for ten one-way Off-Peak rides to/from City Zone 1 only during off-peak hours only and is subject to step-up on Peak trains.</li><li>Valid for 6 month (including date of sale.).</li><li>Tickets are transferable.</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'senior',
        price: '$50.00',
        disclaimer: '<li>Good for ten one-way rides between the zones or stations indicated on the ticket.</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.</li><li>Seniors must be 65 or older and show valid ID.</li><li>Disabilities & Medicare must show valid Medicare card or MTA reduced fare metrocard.</li><li>Valid for 6 month (including date of sale.).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      }
    ]
  },
  {
    ticket: 'one-way',
    options: [
      {
        ticketType: 'peak',
        price: '$10.25',
        disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket.</li><li>Charged on any train scheduled to arrive in NYC terminals between 6am and 10am and/or their connections or departing NYC terminals between 4pm and 8pm.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'off-peak',
        price: '$7.50',
        disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket during off-peak hours only and is subject to step-up on Peak trains.</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'senior',
        price: '$5.00',
        disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket.</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.</li><li>Seniors must be 65 or older and show valid ID.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'family',
        price: '$1.00',
        disclaimer: '<li>Ages 5-11.</li><li>Good for one ride between the zones or stations indicated on the ticket.</li><li>Valid for up to four children when accompanied by a fare paying adult (18 or older).</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'military',
        price: '$7.50',
        disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket.</li><li>Valid on ALL trains.</li><li>Must present an Authorized non-expired US Military Active Duty Identification card.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'disabled',
        price: '$5.00',
        disclaimer: '<li>Good for one ride between the zones or stations indicated on the ticket.</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.</li><li>Disabilities & Medicare must show valid Medicare card or MTA reduced fare metrocard.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'child-peak',
        price: '$5.00',
        disclaimer: '<li>Ages 5-11.</li><li>Good for one ride between the zones or stations indicated on the ticket.</li><li>Charged on any train scheduled to arrive in NYC terminals between 6am and 10am.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'child-off-peak',
        price: '$3.50',
        disclaimer: '<li>Ages 5-11.</li><li>Good for one ride between the zones or stations indicated on the ticket.</li><li>Charged on any train not scheduled to arrive in NYC terminals between 6am and 10am or depart between 4pm and 8pm.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li><li>This fare is charged when children 5-11 are NOT accompanied by an adult or the fifth child (of a Family fare) with and an adult on off-peak trains.</li>'
      }
    ]
  },
  {
    ticket: 'round-trip',
    options: [
      {
        ticketType: 'peak',
        price: '$20.50',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Charged on any weekday train scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm.</li><li>Valid for 60 days (including date of sale).</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'off-peak',
        price: '$15.00',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket during off-peak hours only and is subject to step-up on Peak trains.</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.</li><li>Valid for 60 days (including date of sale).</li><li>Ticket must be activated prior to boarding train for use.</li><li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'senior',
        price: '$10.00',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.</li><li>Seniors must be 65 or older and show valid ID.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'family',
        price: '$2.00',
        disclaimer: '<li>Ages 5-11.</li><li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Valid for up to four children when accompanied by a fare paying adult (18 or older).</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'military',
        price: '$15.00',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Valid on ALL trains.</li><li>Must present an Authorized non-expired US Military Active Duty Identification card.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'disabled',
        price: '$10.00',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.</li><li>Disabilities & Medicare must show valid Medicare card or MTA reduced fare metrocard.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'peak-off-peak',
        price: '$17.75',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Peak charged on any weekday train scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm.</li><li>Off-Peak charged on any train NOT scheduled to arrive in NYC terminals between 1am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'peak-senior',
        price: '$15.25',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Peak charged on any weekday train scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm.</li><li>Senior charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.</li><li>Seniors must be 65 or older and show valid ID.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'peak-disabled',
        price: '$15.25',
        disclaimer: '<li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Peak charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm.</li><li>Disabled & Medicare valid on any train NOT scheduled to arrive in NYC terminals between 6am and 10am weekdays and select holidays.</li><li>Disabilities & Medicare must show valid Medicare card or MTA reduced fare metrocard.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'child-peak',
        price: '$10.00',
        disclaimer: '<li>Ages 5-11.</li><li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Charged on any weekday train scheduled to arrive in NYC terminals between 6am and 10am.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      },
      {
        ticketType: 'child-off-peak',
        price: '$7.00',
        disclaimer: '<li>Ages 5-11.</li><li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Charged on any weekday train not scheduled to arrive in NYC terminals between 6am and 10am or depart between 4pm and 8pm.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li><li>This fare is charged when children 5-11 are NOT accompanied by an adult or the fifth child (of a Family fare) with and an adult on off-peak trains.</li>'
      },
      {
        ticketType: 'peak-child-off-peak-child',
        price: '$8.50',
        disclaimer: '<li>Ages 5-11.</li><li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Peak charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am.</li><li>Off Peak charged on any train not scheduled to arrive in NYC terminals between 6am and 10am or depart between 4pm and 8pm.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li><li>This peak fare is charged when children 5-11 during am peak trains or the fifth child (of a Family fare) with and an adult on pm peak trains.</li><li>This off peak fare is charged when children 5-11 are NOT accompanied by an adult or the fifth child (of a Family fare).</li>'
      },
      {
        ticketType: 'peak-child-family',
        price: '$6.00',
        disclaimer: '<li>Ages 5-11.</li><li>Good for two rides between the zones or stations indicated on the ticket.</li><li>Peak charged on any weekday train scheduled to arrive in NYC terminals between 6am and 10am or depart between 4pm and 8pm.</li><li>Valid for 60 days (including date of sale).</li><li>Tickets purchased in error may be canceled within 5 minutes of purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li><li>This fare is charged when children 5-11 are NOT accompanied by an adult or the fifth child (of a Family fare) with and an adult on off-peak trains.</li><li>This peak fare is charged when children 5-11 during am peak trains or the fifth child (of a Family fare) with and an adult on pm peak trains.</li>'
      }
    ]
  },
  {
    ticket: 'weekly',
    options: [
      {
        ticketType: 'weekly',
        price: '72.25',
        disclaimer: '<li>Unlimited rides between the zones or stations indicated on ticket for a clendar week (Saturday through Friday).</li><li>Ticket is valid at 12:00am on the effective date on the ticket.</li><li>Ticket is valid through 4am the day after the expiration date.</li><li>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</li><li>Ticket must be activated prior to boarding train for use.</li><li>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</li><li>Once activated, ticket will expire after a predetermined length of time for the trip selected.</li><li>Subject to applicable tariff regulations and conditions of use.</li>'
      }
    ]
  }
]

export default DISCLAIMERS;