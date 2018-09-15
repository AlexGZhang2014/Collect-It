import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'

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
          <TextField required name="title" label="Your Post Title" value={this.state.title} onChange={this.handleChange} />
          <br />
          <TextField required name="author" label="Your Name" value={this.state.author} onChange={this.handleChange} />
          <br />
          <TextField required multiline rowsMax="8" name="content" label="Your Post Content" value={this.state.content} onChange={this.handleChange} />
          <br />
          <Input type="submit" className="submit" value="Update post"/>
        </form>
      </div>
    )
  }
}

export default EditPostForm
