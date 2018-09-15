import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class AddPostForm extends Component {
  state = {
    title: '',
    content: '',
    author: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      title: '',
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="new-post-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Create a new post here!</h2>
          <TextField required name="title" label="Your Post Title" value={this.state.title} onChange={this.handleChange} />
          <br />
          <TextField required name="author" label="Your Name" value={this.state.author} onChange={this.handleChange} />
          <br />
          <TextField required multiline rowsMax="8" name="content" value={this.state.content} label="Your Post Content" onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Create post</Button>
        </form>
      </div>
    )
  }
}

export default AddPostForm
