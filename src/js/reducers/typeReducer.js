const initialState = {
  origin: '',
  destination: '',
  secCode: ''
}

const typeReducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case 'typedOrigin':
      return {
        ...state,
        origin: payload.destinationSearch
      };
    case 'typedDestination':
      return {
        ...state,
        destination: payload.destinationClicked
      }
    case 'secCode':
      return {
        ...state,
        secCode: payload.secCode
      }
    default:
      return state;
  }
}

// const typeOriginReducer = ( state = null, { type, payload } ) => {
//   switch ( type ) {
//     case 'typedOrigin':
//       return payload.destinationSearch
//     default:
//       return state;
//   }
// };
//
// const typeDestinationReducer = ( state = null, { type, payload } ) => {
//   switch ( type ) {
//     case 'typedDestination':
//       return payload.destinationClicked
//     default:
//       return state;
//   }
// };

// export default {
//   typeOriginReducer,
//   typeDestinationReducer
// };

export default typeReducer;