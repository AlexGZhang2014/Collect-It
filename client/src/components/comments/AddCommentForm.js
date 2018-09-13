import React, { Component } from 'react'

class AddCommentForm extends Component {
  state = {
    postId: this.props.post.id,
    content: '',
    author: ''
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state);
    this.props.toggleAddComment()
  }

  render() {
    return (
      <div className="new-comment-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Add your comment here!</h2>
          <br />
          <label>Your Name:</label>
          <br />
          <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          <br />
          <label>Your Comment:</label>
          <br />
          <textarea name="content" value={this.state.content} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Add comment"/>
        </form>
      </div>
    )
  }
}

export default AddCommentForm
