function handleClickedOrigin(data) {
  return {
    type: 'clickedOrigin',
    payload: {
      originClicked: data
    }
  }
}

function handleClickedDestination(data) {
  return {
    type: 'clickedDestination',
    payload: {
      destinationClicked: data
    }
  }
}

function handleTicketType(data) {
  return {
    type: 'ticketType',
    payload: {
      ticketType: data
    }
  }
}

function handleTicket(data) {
  // debugger
  let id = data.split(", ")
  console.log(id)
  console.log('yo')
  return {
    type: 'ticket',
    payload: {
      ticket: id[0],
      cost: id[1]
    }
  }
}

function handleNextTicketType(data) {
  return {
    type: 'nextTicketType',
    payload: {
      ticketType: data
    }
  }
}

function switchDestinations(origin, destination) {
  console.log('switched')
  return {
    type: 'switchDestinations',
    payload: {
      clickedOrigin: destination,
      clickedDestination: origin,
    }
  }
}

function switchPeak(data) {
  return {
    type: 'switchPeak',
    payload: {
      ticket: data === 'Peak' ? 'Off-Peak' : 'Peak'
    }
  }
}

export default {
  handleClickedOrigin,
  handleClickedDestination,
  handleTicketType,
  handleTicket,
  handleNextTicketType,
  switchDestinations,
  switchPeak
};
