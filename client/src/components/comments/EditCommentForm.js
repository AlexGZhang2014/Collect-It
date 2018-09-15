import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class EditCommentForm extends Component {
  state = {
    id: this.props.comment.id,
    content: this.props.comment.content,
    author: this.props.comment.author,
    post: this.props.post
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateComment(this.state);
    this.props.toggleEditOff()
  }

  render() {
    return (
      <div className="edit-comment-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Edit your comment here!</h2>
          <TextField required name="author" label="Your Name" value={this.state.author} onChange={this.handleChange} />
          <br />
          <TextField required multiline rowsMax="8" name="content" label="Your Comment" value={this.state.content} onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Update comment</Button>
        </form>
      </div>
    )
  }
}

export default EditCommentForm
