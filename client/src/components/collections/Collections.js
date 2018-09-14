import React, { Component, Fragment } from 'react'
import Collection from './Collection'
import EditCollectionForm from './EditCollectionForm'
import ItemsContainer from '../../containers/ItemsContainer'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Collections extends Component {
  render() {
    return (
      <div className="collections">
        {this.props.collections.map(collection => {
          if (this.props.editCollectionId === collection.id) {
            return (
              <Fragment>
                <EditCollectionForm
                  collection={collection}
                  key={collection.id}
                  updateCollection={this.props.updateCollection}
                  toggleEditOff={this.props.toggleEditOff}
                  />
                <ItemsContainer
                  collection={collection}
                  editCollectionId={this.props.editCollectionId}
                  />
                <ReviewsContainer collection={collection} />
              </Fragment>
            )
          } else {
            return (
              <Collection
                key={collection.id}
                collection={collection} deleteCollection={this.props.deleteCollection}
                toggleEditOn={this.props.toggleEditOn}
                addReview={this.props.addReview}
                />
            )
          }
        })}
      </div>
    )
  }
}

export default Collections
