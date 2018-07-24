import React from 'react';


// import Heroes from './heroes.js';
// import Matches from './matches.js';
// import Peers from './peers.js';
// import Analytics from './analytics.js';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Info extends React.Component {
  state = {
    value: 0,
  }
  
  change = (event, value) => {
    this.setState({ value });
  }

  logic = (component, value) => {
    // define this later, render logic is annoying kapp
    if (this.state.value === value) {

      return  <h1> KILLL ALL POTATOES </h1> 
    } 
  }

  render(){
    console.log(this.state)
    return (
      <Paper>
        <Tabs 
        value={this.state.value}
        onChange={this.change}
        fullWidth
        >
          <Tab label="Overview"/>
          <Tab label="Heroes"/>
          <Tab label="Matches"/>
          <Tab label="Peers"/>
          <Tab label="Analytics"/>
        </Tabs>
        {/* rendering logic */}
        {this.state.value === 0 ? <h1> Overview componenets </h1> : null}
        {this.state.value === 1 ? <h1> Hero componenets </h1> : null}
        {this.state.value === 2 ? <h1> Matches componenets </h1> : null}
        {this.state.value === 3 ? <h1> peers componenets </h1> : null}
        {this.state.value === 4 ? <h1> analytics componenets </h1> : null}

      </Paper>
    )
  }
  
};

export default (Info);
