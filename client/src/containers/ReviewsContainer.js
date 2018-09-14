import React, { Component } from 'react'
import Reviews from '../components/reviews/Reviews'
import { fetchReviews, deleteReview } from '../actions/reviewActions'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  componentDidMount() {
    this.props.fetchReviews()
  }

  render() {
    return (
      <div className="reviews-container">
        <h3>Reviews:</h3>
        <Reviews
          reviews={this.props.reviews}
          collection={this.props.collection}
          deleteReview={this.props.deleteReview}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.reviews
})

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  deleteReview: id => dispatch(deleteReview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
