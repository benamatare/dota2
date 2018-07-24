const URL = `https://api.opendota.com/api`;

// ---------------
// Account Friends
// ---------------

export function fetch_account_peers(id) {
  return dispatch => {
    return fetch(URL + `/players/${id}/peers`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_PEERS',
      payload: json
    }))
  };
};
