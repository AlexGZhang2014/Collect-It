import React, { Component } from 'react'
import { connect } from 'react-redux'
import Collections from '../components/collections/Collections'
import { fetchCollections, addCollection } from '../actions/collectionActions'
import AddCollectionForm from '../components/collections/AddCollectionForm'

class CollectionsContainer extends Component {

  componentDidMount() {
    this.props.fetchCollections()
  }

  render() {
    return (
      <div className="collections-container">
        <h1>Your Collections Feed!</h1>
        <AddCollectionForm />
        <Collections collections={this.props.collections}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  collections: state.collections.collections
})

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  addCollection: state => dispatch(addCollection(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer)
