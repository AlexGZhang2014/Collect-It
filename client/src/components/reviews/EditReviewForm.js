import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
          <h2>Edit your review</h2>
          <TextField required name="title" label="Your Review Title" value={this.state.title} onChange={this.handleChange} />
          <br />
          <TextField required name="author" label="Your Name" value={this.state.author} onChange={this.handleChange} />
          <br />
          <TextField required name="content" label="Your Review" value={this.state.content} onChange={this.handleChange} />
          <br />
          <TextField type="number" name="rating" label="Your Rating" value={this.state.rating} onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Update Review</Button>
        </form>
      </div>
    )
  }
}

export default EditReviewForm
