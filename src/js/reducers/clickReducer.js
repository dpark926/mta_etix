// const initialState = {
//   clickedOrigin: '',
//   clickedDestination: ''
// }

const clickOriginReducer = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case 'clickedOrigin':
      // return {
      //   ...state,
      //   clickedOrigin: payload.originClicked
      // };
      return payload.originClicked
    default:
      return state;
  }
};

const clickedDestinationReducer = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case 'clickedDestination':
    console.log('hey')
      // return {
      //   ...state,
      //   clickedDestination: payload.destinationClicked
      // };
      return payload.destinationClicked
    default:
      return state;
  }
};

export default {
  clickOriginReducer,
  clickedDestinationReducer
};