function handleClickedOrigin(data) {
  return {
    type: 'clickedOrigin',
    payload: {
      originClicked: data
    }
  }
}

function handleClickedDestination(data) {
  console.log('what')
  return {
    type: 'clickedDestination',
    payload: {
      destinationClicked: data
    }
  }
}

export default {
  handleClickedOrigin,
  handleClickedDestination
};
