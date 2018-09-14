import React, { Component } from 'react'
import Collection from './Collection'
import EditCollectionForm from './EditCollectionForm'

class Collections extends Component {
  render() {
    return (
      <div className="collections">
        {this.props.collections.map(collection => {
          if (this.props.editCollectionId === collection.id) {
            return (
              <EditCollectionForm
                collection={collection}
                key={collection.id}
                updateCollection={this.props.updateCollection}
                toggleEditOff={this.props.toggleEditOff}
                />
            )
          } else {
            return (
              <Collection
                key={collection.id}
                collection={collection} deleteCollection={this.props.deleteCollection}
                toggleEditOn={this.props.toggleEditOn}
                />
            )
          }
        })}
      </div>
    )
  }
}

export default Collections
