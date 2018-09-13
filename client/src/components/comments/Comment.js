import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

const Comment = props => {
  return (
    <div className="comment">
      <h4>{props.comment.author} wrote: (<Moment date={props.comment.created_at} fromNow />)</h4>
      <p>{props.comment.content}</p>
      <h6>Last updated: <Moment date={props.comment.updated_at} fromNow /></h6>
      <button onClick={() => props.toggleEditOn(props.comment.id)}>Edit this comment</button>
      <button onClick={() => props.deleteComment(props.comment.id)}>Delete this comment</button>
    </div>
  )
}

export default Comment
