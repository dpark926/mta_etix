function handleTypedOrigin(data) {
  return {
    type: 'typedOrigin',
    payload: {
      destinationSearch: data
    }
  }
}

function handleTypedDestination(data) {
  console.log('hey')
  return {
    type: 'typedDestination',
    payload: {
      destinationClicked: data
    }
  }
}

function handleSecCode(data) {
  return {
    type: 'secCode',
    payload: {
      secCode: data
    }
  }
}

export default {
  handleTypedOrigin,
  handleTypedDestination,
  handleSecCode
};
