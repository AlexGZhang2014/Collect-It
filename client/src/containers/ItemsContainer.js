import React, { Component, Fragment } from 'react'
import Items from '../components/items/Items'
import { fetchItems, addItem, deleteItem } from '../actions/itemActions'
import AddItemForm from '../components/items/AddItemForm'
import { connect } from 'react-redux'

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addItemStatus: false
    }
  }

  toggleAddItem = () => {
    this.setState({
      addItemStatus: !this.state.addItemStatus
    });
    this.renderAddItemForm();
  }

  renderAddItemForm = () => {
    if (this.state.addItemStatus) {
      return <AddItemForm
        collection={this.props.collection}
        addItem={this.props.addItem}
        toggleAddItem={this.toggleAddItem}
        />
    } else {
      return null;
    }
  }

  toggleAddItemButton = () => {
    if (this.props.editCollectionId) {
      return (
        <Fragment>
          <button onClick={this.toggleAddItem}>Add a new item</button>
          <p>Click "Update collection" when you are done adding, deleting, and editing items!</p>
        </Fragment>
      )
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div className="items-container">
        <h3>Items:</h3>
        {this.toggleAddItemButton()}
        {this.renderAddItemForm()}
        <Items
          items={this.props.items}
          collection={this.props.collection}
          deleteItem={this.props.deleteItem}
          editCollectionId={this.props.editCollectionId}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items.items
})

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  addItem: state => dispatch(addItem(state)),
  deleteItem: id => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)
