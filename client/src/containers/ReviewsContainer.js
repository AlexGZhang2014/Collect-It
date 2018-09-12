import React, { Component } from 'react'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  render() {
    return (
      <div className="reviews-container">
        <h3>Reviews:</h3>
        <Reviews reviews={this.props.collection.reviews}/>
      </div>
    )
  }
}

export default ReviewsContainer
