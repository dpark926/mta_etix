const typeOriginReducer = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case 'typedOrigin':
      return payload.destinationSearch
    default:
      return state;
  }
};

const typeDestinationReducer = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case 'typedDestination':
      return payload.destinationClicked
    default:
      return state;
  }
};

export default {
  typeOriginReducer,
  typeDestinationReducer
};