import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from './components/general/loading.js';
import Header from './components/general/header.js';
import Landing from './components/general/landing.js';
import Card from './components/account/card.js';
import Page from './components/account/page.js';

import { fetch_accounts_list } from './actions/account/account.js';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import './css/App.css';
import IconButton from '../node_modules/@material-ui/core';
import Icon from '@material-ui/core/Icon';

import FilterList from '@material-ui/icons/FilterList'

const App = props => {
  // console.log('App state is => ', this.state)

  // console.log('App props are => ', props)
  console.log('Queried Amount is: ', props.accounts.length)


  const cards = () => {
      return props.accounts.map(acc => {
        return <Card key={ acc.account_id } acc={ acc }/>
      });
  };

 const logic = () => {
   if (props.accounts.length === 0 ){
     if (props.count === 0 && props.clicked === false){
       return <Landing />
     } else {
       return <Loading />
     }
   } else if (props.accounts.length !== 0){
     if (props.count === 0 && props.clicked === false){
      //  return (<div className="card-parent"> { cards() }</div>)
       return (
       <GridList cellHeight={90}> 
        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}> 
          <ListSubheader 
          className="card-header" 
          component="div"> <p className="filter"><FilterList disabled /></p> <p className="text">FILTER</p> </ListSubheader> 
          </GridListTile>
         { cards() }
       </GridList>
       )
     } else if (props.count !== 0 && props.clicked === false){
       return <Loading />
     } else if (props.count < 7 && props.clicked === true){
      //  return <Loading />
     } else {
       return <Page />
     }
   };

  }

  return(
    <div>
      <Header/>
      
      { logic() }

    </div>
  );
};


const mapStateToProps = state => {
  return { clicked: state.general.clicked, count: state.accounts.count, accounts: state.accounts.result }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetch_accounts_list: fetch_accounts_list }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
