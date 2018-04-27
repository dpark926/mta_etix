function handleNavClick(data) {
  return {
    type: 'handleNavClick',
    payload: {
      clickedNav: data
    }
  }
}

function handleSubNavClick(data) {
  return {
    type: 'handleSubNavClick',
    payload: {
      clickedSubNav: data
    }
  }
}

export default {
  handleNavClick,
  handleSubNavClick
};
