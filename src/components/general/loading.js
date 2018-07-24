import React from 'react';
// Load CSS file

const Loading = () => {
 const Spinner = require('react-spinkit');
  return (
    <div style={{ border: '3px solid blue' }}>
     <Spinner name="wave" color="#232323"/>
    </div>
  )
};

export default Loading;
