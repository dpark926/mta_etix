const clickReducer = ( state, { type, payload } ) => {
  switch ( type ) {
    case 'handleNavClick':
      return {
        ...state,
        clickedNav: payload.clickedNav
      }
    case 'handleSubNavClick':
      return {
        ...state,
        clickedSubNav: payload.clickedSubNav
      };
    default:
      return state;
  }
};

export default clickReducer;