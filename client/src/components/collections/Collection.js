import React, { Component } from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import ReviewsContainer from '../../containers/ReviewsContainer.js'
import Moment from 'react-moment'
import 'moment-timezone'
import AddReviewForm from '../reviews/AddReviewForm'
import Button from '@material-ui/core/Button'

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addReviewStatus: false
    }
  }

  toggleAddReview = () => {
    this.setState({
      addReviewStatus: !this.state.addReviewStatus
    })
  }

  render() {
    const collection = this.props.collection

    const buttonOrForm = () => !this.state.addReviewStatus ? <Button variant="contained" color="primary" onClick={this.toggleAddReview}>Add a review</Button> : <AddReviewForm collection={collection} toggleAddReview={this.toggleAddReview} addReview={this.props.addReview}/>

    return (
      <div className="collection">
        <h2 className="collection-name">{collection.name}</h2>
        <h4>Owner: {collection.owner} (Created <Moment date={collection.created_at} fromNow />)</h4>
        <p>{collection.description}</p>
        <h6>Last updated: <Moment date={collection.updated_at} fromNow /></h6>
        <Button variant="contained" color="primary" onClick={() => this.props.toggleEditOn(collection.id)}>Edit this collection</Button>
        <Button variant="contained" color="secondary" onClick={() => this.props.deleteCollection(collection.id)}>Delete this collection</Button>
        {buttonOrForm()}
        <ItemsContainer collection={collection} />
        <ReviewsContainer collection={collection} />
      </div>
    )
  }
}

export default Collection
