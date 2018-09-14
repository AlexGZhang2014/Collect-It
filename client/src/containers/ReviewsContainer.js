import React, { Component } from 'react'
import Reviews from '../components/reviews/Reviews'
import { fetchReviews } from '../actions/reviewActions'
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
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.reviews
})

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
