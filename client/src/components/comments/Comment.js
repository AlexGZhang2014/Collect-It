import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

const Comment = props => {
  return (
    <div>
      <h4>{props.comment.author} wrote: (<Moment date={props.comment.created_at} fromNow />)</h4>
      <p>{props.comment.content}</p>
    </div>
  )
}

export default Comment
