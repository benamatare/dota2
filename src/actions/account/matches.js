
const URL = `https://api.opendota.com/api`;

// ---------------
// Account Matches
// ---------------

// Get matches for an account
export function fetch_account_matches(id){
  return dispatch => {
    return fetch(URL + `/players/${id}/matches`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_MATCHES',
      payload: json
    }))
  };
};

// Get recent matches (last ~25)
export function fetch_account_recent_matches(id){
  return dispatch => {
    return fetch(URL + `/players/${id}/recentMatches`)
    .then(res => res.json())
    .then(json => dispatch({
      type: 'SET_RECENT_MATCHES',
      payload: json
    }))
  };
};
