
const URL = `https://api.opendota.com/api`;

// ---------------
// Account Heroes
// ---------------

export function fetch_account_heroes(id){
  return dispatch => {
    return fetch(URL + `/players/${id}`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_HEROES',
      payload: json
    }))
  };
};
