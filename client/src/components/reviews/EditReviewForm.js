import React, { Component } from 'react'

class EditReviewForm extends Component {
  state = {
    id: this.props.review.id,
    title: this.props.review.title,
    content: this.props.review.content,
    author: this.props.review.author,
    rating: this.props.review.rating,
    collection: this.props.collection
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateReview(this.state);
    this.props.toggleEditOff()
  }

  render() {
    return (
      <div className="edit-review-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Add your review here!</h2>
          <label>Your Review Title:</label>
          <br />
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <br />
          <label>Your Name:</label>
          <br />
          <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          <br />
          <label>Your Review:</label>
          <br />
          <textarea name="content" value={this.state.content} onChange={this.handleChange} />
          <br />
          <label>Your Rating:</label>
          <br />
          <input type="number" name="rating" value={this.state.rating} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Add review"/>
        </form>
      </div>
    )
  }
}

export default EditReviewForm
