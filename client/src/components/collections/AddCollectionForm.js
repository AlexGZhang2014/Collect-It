import React, { Component } from 'react'

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
          <label>Your Collection Name:</label>
          <br />
          <input type="text" name="name" value={this.state.title} onChange={this.handleChange} />
          <br />
          <label>Your Name:</label>
          <br />
          <input type="text" name="owner" value={this.state.author} onChange={this.handleChange} />
          <br />
          <label>Your Collection Description:</label>
          <br />
          <textarea name="description" value={this.state.content} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Create collection"/>
        </form>
      </div>
    )
  }
}

export default AddCollectionForm
