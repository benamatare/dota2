const generalReducer = (state = { clicked: false }, action) => {
  switch (action.type) {
    case 'SET_PEERS':
      return {...state,
        clicked: !state.clicked
      };
    // Reset
    case 'RESET':
      return {...state,
        clicked: false,
      };
    default:
      return state;
  }
};

export default generalReducer;
