import React, { Component } from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import ReviewsContainer from '../../containers/ReviewsContainer.js'
import Moment from 'react-moment'
import 'moment-timezone'

class Collection extends Component {
  render() {
    const collection = this.props.collection

    return (
      <div className="collection">
        <h2>{collection.name}</h2>
        <h4>Owner: {collection.owner} (Created <Moment date={collection.created_at} fromNow />)</h4>
        <p>{collection.description}</p>
        <button onClick={() => this.props.deleteCollection(collection.id)}>Delete this collection</button>
        <ItemsContainer collection={collection} />
        <ReviewsContainer collection={collection} />
      </div>
    )
  }
}

export default Collection
