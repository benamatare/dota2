import React from 'react';
// Load CSS file
import Search from './search.js';
import './../../css/components/general/header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
    <div className="header-parent">
        <h1 className="header-title"> StatDota </h1>
        <span className="header-search"> <Search /> </span>
    </div>
  )
};

export default Header;
