import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
          <TextField required name="title" label="Your Review Title" value={this.state.title} onChange={this.handleChange} />
          <br />
          <TextField required name="author" label="Your Name" value={this.state.author} onChange={this.handleChange} />
          <br />
          <TextField required multiline rowsMax="8" name="content" label="Your Review" value={this.state.content} onChange={this.handleChange} />
          <br />
          <TextField required type="number" name="rating" label="Your Rating" value={this.state.rating} onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Add Review</Button>
        </form>
      </div>
    )
  }
}

export default AddReviewForm
