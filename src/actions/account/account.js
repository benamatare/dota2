
const URL = `https://api.opendota.com/api`;

// ---------------
// Accounts & Info
// ---------------

export function fetch_accounts_list(query){
  return dispatch => {
    return fetch(URL + `/search?q=${query}`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_RESULT',
      payload: json
    }))
  };
};


export function fetch_account_info(id){
  return dispatch => {
    return fetch(URL + `/players/${id}`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_INFO',
      payload: json
    }))
  };
};

export function fetch_account_ratio(id){
  return dispatch => {
    return fetch(URL + `/players/${id}/wl`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_RATIO',
      payload: json
    }))
  };
};

export function fetch_account_role(id){
  return dispatch => {
    return fetch(URL + `/players/${id}/counts`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_ROLES',
      payload: json
    }))
  };
};
