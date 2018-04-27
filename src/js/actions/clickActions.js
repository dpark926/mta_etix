function handleClickedOrigin(data) {
  return {
    type: 'handleClickedOrigin',
    payload: {
      originClicked: data
    }
  }
}

export default {
  handleClickedOrigin
};
