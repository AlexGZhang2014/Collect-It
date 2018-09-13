import React, { Component } from 'react'

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
          <br />
          <label>Your Name:</label>
          <br />
          <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          <br />
          <label>Your Comment:</label>
          <br />
          <textarea name="content" value={this.state.content} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Update comment"/>
        </form>
      </div>
    )
  }
}

export default EditCommentForm
