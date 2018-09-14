import React, { Component } from 'react'
import Item from './Item'

class Items extends Component {
  render() {
    return (
      <div className="items">
        {this.props.items.map(item => {
          if (item.collection && this.props.collection && item.collection.id === this.props.collection.id) {
            return (
              <Item
                key={item.id}
                item={item}
                deleteItem={this.props.deleteItem}
                />
            );
          }
        })}
      </div>
    )
  }
}

export default Items
