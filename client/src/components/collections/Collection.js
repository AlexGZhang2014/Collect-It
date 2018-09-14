import React, { Component } from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import ReviewsContainer from '../../containers/ReviewsContainer.js'
import Moment from 'react-moment'
import 'moment-timezone'
import AddReviewForm from '../reviews/AddReviewForm'

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addReviewStatus: false
    }
  }

  toggleAddReview = () => {
    this.setState({
      addReviewStatus: !this.state.addReviewStatus
    })
  }

  render() {
    const collection = this.props.collection

    const buttonOrForm = () => !this.state.addReviewStatus ? <button onClick={this.toggleAddReview}>Add a review</button> : <AddReviewForm collection={collection} toggleAddReview={this.toggleAddReview} addReview={this.props.addReview}/>

    return (
      <div className="collection">
        <h2>{collection.name}</h2>
        <h4>Owner: {collection.owner} (Created <Moment date={collection.created_at} fromNow />)</h4>
        <p>{collection.description}</p>
        <h6>Last updated: <Moment date={collection.updated_at} fromNow /></h6>
        <button onClick={() => this.props.toggleEditOn(collection.id)}>Edit this collection</button>
        <button onClick={() => this.props.deleteCollection(collection.id)}>Delete this collection</button>
        {buttonOrForm()}
        <ItemsContainer collection={collection} />
        <ReviewsContainer collection={collection} />
      </div>
    )
  }
}

export default Collection
