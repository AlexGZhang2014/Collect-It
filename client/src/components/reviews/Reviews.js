import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        {this.props.reviews.map(review => {
          if (review.collection && this.props.collection && review.collection.id === this.props.collection.id) {
            return (
              <Review
                key={review.id}
                review={review}
                deleteReview={this.props.deleteReview}
                />
            )
          }
        })}
      </div>
    )
  }
}

export default Reviews
