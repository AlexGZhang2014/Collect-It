import React, { Component } from 'react'
import Review from './Review'
import EditReviewForm from './EditReviewForm'

class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        {this.props.reviews.map(review => {
          if (review.collection && this.props.collection && review.collection.id === this.props.collection.id) {
            if (this.props.editReviewId === review.id) {
              return (
                <EditReviewForm
                  review={review}
                  collection={this.props.collection}
                  key={review.id}
                  updateReview={this.props.updateReview}
                  toggleEditOff={this.props.toggleEditOff}
                  />
              );
            } else {
              return (
                <Review
                  key={review.id}
                  review={review}
                  deleteReview={this.props.deleteReview}
                  toggleEditOn={this.props.toggleEditOn}
                  />
              );
            }
          }
        return null;})
        }
      </div>
    )
  }
}

export default Reviews
