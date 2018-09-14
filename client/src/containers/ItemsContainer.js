import React, { Component } from 'react'
import Items from '../components/items/Items'

class ItemsContainer extends Component {
  trueStatement = (statement) => {
    if (statement) {
      return <button>BUTTON</button>
    }
  }

  render() {
    return (
      <div className="items-container">
        <h3>Items:</h3>
        {this.trueStatement(true)}
        <Items items={this.props.collection.items}/>
      </div>
    )
  }
}

export default ItemsContainer
