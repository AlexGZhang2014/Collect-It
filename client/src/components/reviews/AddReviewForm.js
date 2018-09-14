import React, { Component } from 'react'

class AddReviewForm extends Component {
  state = {
    collectionId: this.props.collection.id,
    title: '',
    content: '',
    author: '',
    rating: ''
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.props.toggleAddReview()
  }

  render() {
    return (
      <div className="new-review-form" onSubmit={this.handleSubmit}>
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

export default AddReviewForm
