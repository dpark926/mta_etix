const initialState = {
  clickedOrigin: 'Broadway',
  clickedDestination: 'Penn Station',
  ticketType: 'One Way',
  ticket: 'Peak',
  cost: '$10.25'
}

const clickReducer = ( state = initialState, { type, payload } ) => {
    switch ( type ) {
      case 'clickedOrigin':
        return {
          ...state,
          clickedOrigin: payload.originClicked
        };
      case 'clickedDestination':
        return {
          ...state,
          clickedDestination: payload.destinationClicked
        };
      case 'ticketType':
        return {
          ...state,
          ticketType: payload.ticketType
        }
      case 'ticket':
        return {
          ...state,
          ticket: payload.ticket,
          cost: payload.cost
        };
      default:
        return state;
    }
}


// const clickOriginReducer = ( state = null, { type, payload } ) => {
//   switch ( type ) {
//     case 'clickedOrigin':
//       // return {
//       //   ...state,
//       //   clickedOrigin: payload.originClicked
//       // };
//       return payload.originClicked
//     default:
//       return state;
//   }
// };
//
// const clickedDestinationReducer = ( state = null, { type, payload } ) => {
//   switch ( type ) {
//     case 'clickedDestination':
//       // console.log('hey')
//       // return {
//       //   ...state,
//       //   clickedDestination: payload.destinationClicked
//       // };
//       return payload.destinationClicked
//     default:
//       return state;
//   }
// };
//
// const clickedTicketType = ( state = null, { type, payload } ) => {
//   switch ( type ) {
//     case 'ticketType':
//       return payload.ticketType
//     default:
//       return state;
//   }
// };
//
// const clickedTicket = ( state = null, { type, payload } ) => {
//   switch ( type ) {
//     case 'ticket':
//     return {
//       ...state,
//       ticket: payload.ticket,
//       cost: payload.cost
//     };
//     default:
//       return state;
//   }
// };

// export default {
//   clickOriginReducer,
//   clickedDestinationReducer,
//   clickedTicketType,
//   clickedTicket
// };

export default clickReducer;