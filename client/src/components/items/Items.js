import React, { Component } from 'react'
import Item from './Item'

class Items extends Component {
  render() {
    const items = this.props.items.map(item => <Item key={item.id} item={item} />)

    return (
      <div>{ items }</div>
    )
  }
}

export default Items
