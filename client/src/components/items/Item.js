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
        <button onClick={() => this.props.toggleEditOn(this.props.item.id)}>Edit this item</button>
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
        <h6>Last updated: <Moment date={this.props.item.updated_at} fromNow /></h6>
        {this.renderEditButton()}
        {this.renderDeleteButton()}
      </div>
    )
  }
}

export default Item
