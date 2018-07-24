import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ~f imports for accounts //
import { fetch_account_info, fetch_account_ratio, fetch_account_role } from './../../actions/account/account.js';
import { fetch_account_matches, fetch_account_recent_matches } from './../../actions/account/matches.js';
import { fetch_account_heroes } from './../../actions/account/heroes.js';
import { fetch_account_peers } from './../../actions/account/peers.js';
// ~f imports for general //
import { set_click } from './../../actions/general/general.js';
// Outside compoment library import -- for time based info
import TimeAgo from 'react-timeago';
// CSS & Styling Imports
import './../../css/components/account/card.css';
// MaterialUI Compoments 
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// import Tooltip from '@material-ui/core/Tooltip';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar } from '../../../node_modules/@material-ui/core';
const Card = props => {
  // ~f which wraps all the seperate fetches for specific account information //
  const fetches = id => {
    return (
    props.info(id), props.ratio(id), props.roles(id),
    props.matches(id), props.recent_matches(id), props.heroes(id),
    props.peers(id)
    );
  };
  // ~f for click event, clicker changes store, fetches hits account specific info fetches //
  const click = e => {
    e.preventDefault();
    props.clicker();
    fetches(e.target.parentElement.parentElement.id);
  };

  const trim = name => {
    return name.substring(0,6)
  };

  console.log('Props in Card are: ', props)
  return (
    <GridListTile id={props.acc.account_id} onClick={ click }>
      <img src={props.acc.avatarfull} alt={props.acc.personaname}/>
        <GridListTileBar title={ trim(props.acc.personaname) }
          subtitle={props.acc.last_match_time ? <TimeAgo date={props.acc.last_match_time}/> : null}/>
    </GridListTile>
  )
};

const mapStateToProps = state => { 
  return { clicked: state.general.clicked, count: state.accounts.count }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    info: fetch_account_info, ratio: fetch_account_ratio, roles: fetch_account_role,
    matches: fetch_account_matches, recent_matches: fetch_account_recent_matches, heroes: fetch_account_heroes, peers: fetch_account_peers, 
    clicker: set_click }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
