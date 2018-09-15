import React, { Component } from 'react'
import Item from './Item'
import EditItemForm from './EditItemForm'

class Items extends Component {
  render() {
    return (
      <div className="items">
        {this.props.items.map(item => {
          if (item.collection && this.props.collection && item.collection.id === this.props.collection.id) {
            if (this.props.editItemId === item.id) {
              return (
                <EditItemForm
                  item={item}
                  collection={this.props.collection}
                  key={item.id}
                  updateItem={this.props.updateItem}
                  toggleEditOff={this.props.toggleEditOff}
                  />
              );
            } else {
              return (
                <Item
                  key={item.id}
                  item={item}
                  deleteItem={this.props.deleteItem}
                  toggleEditOn={this.props.toggleEditOn}
                  editCollectionId={this.props.editCollectionId}
                  />
              );
            }
          }
        return null;})
        }
      </div>
    )
  }
}

export default Items
