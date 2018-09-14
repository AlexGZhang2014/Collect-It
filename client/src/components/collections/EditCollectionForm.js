import React, { Component } from 'react'

class EditCollectionForm extends Component {
  state = {
    id: this.props.collection.id,
    name: this.props.collection.name,
    description: this.props.collection.description,
    owner: this.props.collection.owner,
    items: this.props.collection.items,
    reviews: this.props.collection.reviews
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateCollection(this.state);
    this.props.toggleEditOff()
  }

  render() {
    return (
      <div className="edit-collection-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Edit your collection here!</h2>
          <br />
          <label>Your Collection Title:</label>
          <br />
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <br />
          <label>Your Name:</label>
          <br />
          <input type="text" name="owner" value={this.state.owner} onChange={this.handleChange} />
          <br />
          <label>Your Collection Description:</label>
          <br />
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Update collection"/>
        </form>
      </div>
    )
  }
}

export default EditCollectionForm
