import React, { Component } from 'react'

class EditPostForm extends Component {
  state = {
    id: this.props.post.id,
    title: this.props.post.title,
    content: this.props.post.content,
    author: this.props.post.author,
    comments: this.props.post.comments
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updatePost(this.state);
    this.props.toggleEditOff()
  }

  render() {
    return (
      <div className="edit-post-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Edit your post here!</h2>
          <label>Your Post Title:</label>
          <br />
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <br />
          <label>Your Name:</label>
          <br />
          <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          <br />
          <label>Your Post Content:</label>
          <br />
          <textarea name="content" value={this.state.content} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Update post"/>
        </form>
      </div>
    )
  }
}

export default EditPostForm
