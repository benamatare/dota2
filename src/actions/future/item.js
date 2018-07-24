const URL = 'https://api.stratz.com/api/v1/';

// Fetch items
export function fetch_items(){
  return dispatch => {
    return fetch(URL + 'Item')
     .then(res => res.json())
     // .then(json => console.log(json))
     .then(json => dispatch({type: 'SET_ITEM_DATA', payload: json}))
  };
}
