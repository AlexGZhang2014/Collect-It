import React, { Component } from 'react'

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
          <label>Your Item Name:</label>
          <br />
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <br />
          <label>Your Item Description:</label>
          <br />
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Update item"/>
        </form>
      </div>
    )
  }
}

export default EditItemForm
