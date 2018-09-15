import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class AddItemForm extends Component {
  state = {
    collectionId: this.props.collection.id,
    name: '',
    description: ''
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.props.toggleAddItem()
  }

  render() {
    return (
      <div className="new-item-form" onSubmit={this.handleSubmit}>
        <form>
          <h2>Add your item here!</h2>
          <TextField required name="name" label="Item Name" value={this.state.name} onChange={this.handleChange} />
          <br />
          <TextField required multiline rowsMax="8" name="description" label="Item Description" value={this.state.description} onChange={this.handleChange} />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">Add item</Button>
        </form>
      </div>
    )
  }
}

export default AddItemForm
