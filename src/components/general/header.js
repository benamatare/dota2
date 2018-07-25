import React from 'react';
// Load CSS file
import Search from './search.js';

const Header = () => {
    return (
    <div style={{ padding: 5, 'backgroundColor': '#272727', border: '15px solid #272727' }}>
      <p> This is the header, a logo will go somewhere up here alongside some other icons</p>
      <Search />
    </div>
  )
};

export default Header;
