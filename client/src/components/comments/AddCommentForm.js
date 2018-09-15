import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'

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
          <TextField required name="author" label="Your Name" value={this.state.author} onChange={this.handleChange} />
          <br />
          <TextField required multiline rowsMax="8" name="content" label="Your Comment" value={this.state.content} onChange={this.handleChange} />
          <br />
          <Input type="submit" className="submit" value="Add comment"/>
        </form>
      </div>
    )
  }
}

export default AddCommentForm
