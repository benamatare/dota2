
// Reducer handler for items
const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ITEM_DATA':
      const store = Object.keys(action.payload).map(id => {
        return action.payload[id];
      });
      console.log('itemReducer hit, payload sent to Redux store is => ', store)
        return {...state,
          item_data: store
        };
    default:
      return state;
  }
};


export default itemReducer;
