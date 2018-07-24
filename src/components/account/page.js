// import React from 'react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { reset } from './../../actions/general/general.js'

import Profile from './tabs/profile.js';
import Info from './tabs/info.js';



class Page extends Component {

// const Page = props => {
  componentDidMount(){
    console.log('shit')
  // this.props.reset()
  }

// when this moutns flush the count
render() {
  return (
    <div className="page-parent" style={{ border: '22px solid purple' }}>
      <Profile />
      <Info />
  </div>
  )}
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    reset: reset }, dispatch);
};

export default connect(null, mapDispatchToProps)(Page);
