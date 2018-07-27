// import React from 'react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { reset } from './../../actions/general/general.js'

import Profile from './tabs/profile.js';
import Info from './tabs/info.js';
import Type from './tabs/type.js';

import './../../css/components/account/page.css';


class Page extends Component {

// const Page = props => {
  
// when this moutns flush the count
render() {
  return (
  <div className="page-parent">
    <div className="page-parent-top">
      <Profile /> 
      <Type />
    </div>
 

    <div> cycle tab component goes here, this renders the page at the bottom of the screen</div>
    <div> <Info /></div>
   
    <div> maybe have counts thingy go here?</div>




      
  </div>
  )}
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    reset: reset }, dispatch);
};

export default connect(null, mapDispatchToProps)(Page);
