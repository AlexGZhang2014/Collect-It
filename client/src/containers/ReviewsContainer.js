import React, { Component } from 'react'
import Reviews from '../components/reviews/Reviews'
import { fetchReviews, deleteReview, updateReview } from '../actions/reviewActions'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editReviewId: null
    }
  }

  toggleEditOn = id => {
    this.setState({
      editReviewId: id
    })
  }

  toggleEditOff = () => {
    this.setState({
      editReviewId: null
    })
  }

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
          updateReview={this.props.updateReview}
          toggleEditOn={this.toggleEditOn}
          toggleEditOff={this.toggleEditOff}
          editReviewId={this.state.editReviewId}
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
  deleteReview: id => dispatch(deleteReview(id)),
  updateReview: state => dispatch(updateReview(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
