import React from 'react';
import { connect } from 'react-redux';

import { fetch_item_image_large } from '../actions/images.js';

const Item = props => {
console.log(props.item)
  return <img alt={props.item.uri} src={fetch_item_image_large(props.item.uri)}></img>

}


export default Item;
