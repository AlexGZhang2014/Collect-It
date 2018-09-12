import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

const Review = props => {
  const stars = props.review.rating > 1 ? "STARS" : "STAR"

  return (
    <div className="review">
      <h4>{props.review.author} wrote: (<Moment date={props.review.created_at} fromNow />)</h4>
      <p><strong>{props.review.rating} {stars}</strong></p>
      <p>{props.review.content}</p>
    </div>
  )
}

export default Review
