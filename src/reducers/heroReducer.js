// Reducer handler for heroes
const heroReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HERO_DATA':
      const store = Object.keys(action.payload).map(id => {
        return action.payload[id];
      });
      console.log('heroReducer hit, payload sent to Redux store is => ', store)
        return {...state,
          hero_data: store
        };
    default:
      return state;
  }
};

export default heroReducer;
