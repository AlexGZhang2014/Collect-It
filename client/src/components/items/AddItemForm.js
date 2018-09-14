import React, { Component } from 'react'

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
          <label>Your Item Name:</label>
          <br />
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <br />
          <label>Your Item Description:</label>
          <br />
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Add item"/>
        </form>
      </div>
    )
  }
}

export default AddItemForm
