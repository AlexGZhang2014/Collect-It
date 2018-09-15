import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import Button from '@material-ui/core/Button'

const Comment = props => {
  return (
    <div className="comment">
      <h4>{props.comment.author} wrote: (<Moment date={props.comment.created_at} fromNow />)</h4>
      <p>{props.comment.content}</p>
      <h6>Last updated: <Moment date={props.comment.updated_at} fromNow /></h6>
      <Button variant="contained" color="primary" onClick={() => props.toggleEditOn(props.comment.id)}>Edit this comment</Button>
      <Button variant="contained" color="secondary" onClick={() => props.deleteComment(props.comment.id)}>Delete this comment</Button>
    </div>
  )
}

export default Comment
