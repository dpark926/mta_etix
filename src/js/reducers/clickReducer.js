const clickReducer = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case 'handleClickedOrigin':
      return {
        ...state,
        clickedOrigin: payload.originClicked
      };
    default:
      return state;
  }
};

export default clickReducer;