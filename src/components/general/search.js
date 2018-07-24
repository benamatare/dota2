import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ~f imports for accounts //
import { fetch_accounts_list }  from './../../actions/account/account.js'
// Outside compoment library import -- for search
import SearchBar from 'material-ui-search-bar'

import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search'
import Tooltip from '@material-ui/core/Tooltip';


import './../../css/components/general/search.css';
const styles = {
  root: {
    height: 48,
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconButton: {
    opacity: 0.54,
    transform: 'scale(1, 1)',
    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0
    }
  },
  iconButtonDisabled: {
    opacity: 0.38
  },
  searchIconButton: {
    marginRight: -48
  },
  icon: {
    opacity: 0.54,
    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  input: {
    width: '100%'
  },
  searchContainer: {
    margin: 'auto 16px',
    width: '100%'
  }
}
class Search extends Component {
  state = {
    query: '',
  };

  input = e => {
    this.setState({ 
      query: e.target.value
    })
  };
  
  key = e => {
    return e.charCode === 13 || e.key === 'Enter' ? this.submit() : null
  }

  submit = () => {
    this.state.query.replace(/\s/g, '').length >= 1 ? this.props.fetch_accounts_list(this.state.query) : console.log('nien!')
  };

  render() {
    return(
      <Paper>
        <Input
          disableUnderline
          placeholder={"Search"}
          value={this.state.query}
          onChange={this.input}
          onKeyUp={this.key}/>
        <IconButton disableRipple onClick={this.submit}> 
          <Tooltip 
            enterDelay={500}
            leaveDelay={500}
            title="Search">
            <SearchIcon /> 
          </Tooltip>
        </IconButton>
        </Paper>
    )
}
};

Search.propTypes = {
  query: PropTypes.string
}

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      fetch_accounts_list: fetch_accounts_list
    }, dispatch)
  };

export default connect(null, mapDispatchToProps)(Search);
