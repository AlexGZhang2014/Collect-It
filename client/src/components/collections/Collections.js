import React, { Component } from 'react'
import Collection from './Collection'

class Collections extends Component {
  render() {
    const collections = this.props.collections.map(collection => <Collection key={collection.id} collection={collection} deleteCollection={this.props.deleteCollection} updateCollection={this.props.updateCollection} />)

    return (
      <div className="collections">
        {collections}
      </div>
    )
  }
}

export default Collections
