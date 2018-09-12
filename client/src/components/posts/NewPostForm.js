import React, { Component } from 'react'

class NewPostForm extends Component {
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
      <div className="post-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Create a new post here!</h2>
          <br />
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
          <input type="submit" value="Create post"/>
        </form>
      </div>
    )
  }
}

export default NewPostForm
