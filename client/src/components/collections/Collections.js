import React, { Component } from 'react'
import Collection from './Collection'

class Collections extends Component {
  render() {
    const collections = this.props.collections.map(collection => <Collection key={collection.id} collection={collection} />)

    return (
      <div className="collections">
        {collections}
      </div>
    )
  }
}

export default Collections
