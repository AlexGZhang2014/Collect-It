import React, { Component } from 'react'

class Collection extends Component {
  render() {
    const collection = this.props.collection

    return (
      <div className="collection">
        <h2>{collection.name}</h2>
        <h4>Owner: {collection.owner}</h4>
        <p>{collection.description}</p>
      </div>
    )
  }
}

export default Collection
