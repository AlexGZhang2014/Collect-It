import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class EditItemForm extends Component {
  state = {
    id: this.props.item.id,
    name: this.props.item.name,
    description: this.props.item.description,
    collection: this.props.collection
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateItem(this.state);
    this.props.toggleEditOff()
  }

  render() {
    return (
      <div className="edit-item-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Edit your item</h2>
          <TextField required name="name" label="Item Name" value={this.state.name} onChange={this.handleChange} />
          <br />
          <TextField required name="description" label="Item Description" value={this.state.description} onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Update Item</Button>
        </form>
      </div>
    )
  }
}

export default EditItemForm
