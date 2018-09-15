import React, { Component } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

class Item extends Component {
  renderDeleteButton = () => {
    if (this.props.editCollectionId) {
      return (
        <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete this item</button>
      )
    } else {
      return null;
    }
  }

  renderEditButton = () => {
    if (this.props.editCollectionId) {
      return (
        <button>Edit this item</button>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="item">
        <h4>{this.props.item.name} (Added: <Moment date={this.props.item.created_at} fromNow />)</h4>
        <p>{this.props.item.description}</p>
        {this.renderDeleteButton()}
        {this.renderEditButton()}
      </div>
    )
  }
}

export default Item
