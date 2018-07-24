const URL = 'https://api.stratz.com/api/v1/';

// Fetch heroes
export function fetch_heroes(){
  return dispatch => {
    return fetch(URL + 'Hero')
     .then(res => res.json())
     // .then(json => console.log(json))
     .then(json => dispatch({type: 'SET_HERO_DATA', payload: json}))
  };
}
