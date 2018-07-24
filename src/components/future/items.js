import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Item from './item.js';
import { sort_items } from '../actions/sort.js';

class Items extends Component {
  renderItems = () => {
    return this.props.items.sort().map(item => {
      if (!item.name.includes('_recipe')){
        if (!item.name.includes('river_painter')){
          if (!item.name.includes('mutation_tombstone')){
            if(!item.name.includes('pocket_tower')){
              if(!item.name.includes('super_blink')){
                if(!item.name.includes('ward_dispenser')){
                  if(!item.name.includes('tango_single')){
                    if(!item.name.includes('iron_talon')){
                      if(!item.name.includes('poor_mans_shield')){
                        return <Item item={item} key={item.id} />
                      }}}}}}}}}}
  )};

  render() {
    return (
      <div>
        <h1> Dota 2 Items: </h1>
        {this.renderItems()}
      </div>
    )
  }
}




const mapStateToProps = state => {
  return { items: state.items.item_data }
};


export default connect(mapStateToProps, null)(Items);
