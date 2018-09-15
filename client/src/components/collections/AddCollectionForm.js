import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class AddCollectionForm extends Component {
  state = {
    name: '',
    description: '',
    owner: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addCollection(this.state);
    this.setState({
      title: '',
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="new-collection-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Create a new collection here!</h2>
          <TextField required name="name" label="Collection Name" value={this.state.title} onChange={this.handleChange} />
          <br />
          <TextField required name="owner" label="Your Name" value={this.state.author} onChange={this.handleChange} />
          <br />
          <TextField required multiline rowsMax="8" name="description" label="Collection Description" value={this.state.content} onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Create collection</Button>
        </form>
      </div>
    )
  }
}

export default AddCollectionForm
