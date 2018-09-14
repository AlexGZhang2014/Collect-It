import React, { Component } from 'react'
import Items from '../components/items/Items'
import { fetchItems } from '../actions/itemActions'
import { connect } from 'react-redux'

class ItemsContainer extends Component {
  trueStatement = (statement) => {
    if (statement) {
      return <button>BUTTON</button>
    }
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div className="items-container">
        <h3>Items:</h3>
        {this.trueStatement(true)}
        <Items
          items={this.props.items}
          collection={this.props.collection}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items.items
})

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)
