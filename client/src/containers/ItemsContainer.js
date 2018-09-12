import React, { Component } from 'react'
import Items from '../components/items/Items'

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        <h3>Items:</h3>
        <Items items={this.props.collection.items}/>
      </div>
    )
  }
}

export default ItemsContainer
