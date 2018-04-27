function handleTypedOrigin(data) {
  return {
    type: 'typedOrigin',
    payload: {
      destinationSearch: data
    }
  }
}

function handleTypedDestination(data) {
  return {
    type: 'typedDestination',
    payload: {
      destinationClicked: data
    }
  }
}

export default {
  handleTypedOrigin,
  handleTypedDestination
};
