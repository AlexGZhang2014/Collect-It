import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import Button from '@material-ui/core/Button'

const Review = props => {
  const stars = props.review.rating > 1 ? "STARS" : "STAR"

  return (
    <div className="review">
      <h4>{props.review.author} wrote: (<Moment date={props.review.created_at} fromNow />)</h4>
      <p><strong>{props.review.title} - {props.review.rating} {stars}</strong></p>
      <p>{props.review.content}</p>
      <h6>Last updated: <Moment date={props.review.updated_at} fromNow /></h6>
      <Button variant="contained" color="primary" onClick={() => props.toggleEditOn(props.review.id)}>Edit this review</Button>
      <Button variant="contained" color="secondary" onClick={() => props.deleteReview(props.review.id)}>Delete this review</Button>
    </div>
  )
}

export default Review
