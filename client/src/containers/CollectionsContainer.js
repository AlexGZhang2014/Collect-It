import React, { Component } from 'react'
import { connect } from 'react-redux'
import Collections from '../components/collections/Collections'
import { fetchCollections, addCollection, deleteCollection, updateCollection } from '../actions/collectionActions'
import { addReview } from '../actions/reviewActions'
import AddCollectionForm from '../components/collections/AddCollectionForm'

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editCollectionId: null
    }
  }

  toggleEditOn = id => {
    this.setState({
      editCollectionId: id
    })
  }

  toggleEditOff = () => {
    this.setState({
      editCollectionId: null
    })
  }

  componentDidMount() {
    this.props.fetchCollections()
  }

  render() {
    return (
      <div className="collections-container">
        <h1>Your Collections Feed!</h1>
        <AddCollectionForm addCollection={this.props.addCollection} />
        <Collections
          collections={this.props.collections} deleteCollection={this.props.deleteCollection}
          updateCollection={this.props.updateCollection}
          addReview={this.props.addReview}
          toggleEditOn={this.toggleEditOn}
          toggleEditOff={this.toggleEditOff}
          editCollectionId={this.state.editCollectionId}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  collections: state.collections.collections
})

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  addCollection: state => dispatch(addCollection(state)),
  deleteCollection: state => dispatch(deleteCollection(state)),
  updateCollection: state => dispatch(updateCollection(state)),
  addReview: state => dispatch(addReview(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer)
