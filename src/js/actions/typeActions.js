function handleOrigin(data) {
  return {
    type: 'handleOrigin',
    payload: {
      originSearch: data
    }
  }
}

export default {
  handleOrigin
};
