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

export default {
  handleClickedOrigin,
  handleClickedDestination,
  handleTicketType
};
