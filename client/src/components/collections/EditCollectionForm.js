import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
          <TextField required name="name" label="Collection Title" value={this.state.name} onChange={this.handleChange} />
          <br />
          <TextField required name="owner" label="Your Name" value={this.state.owner} onChange={this.handleChange} />
          <br />
          <TextField required name="description" label="Collection Description" value={this.state.description} onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Update collection</Button>
        </form>
      </div>
    )
  }
}

export default EditCollectionForm
