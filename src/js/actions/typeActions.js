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

export default {
  handleTypedOrigin,
  handleTypedDestination
};
