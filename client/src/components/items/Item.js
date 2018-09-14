import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

const Item = props => {
  return (
    <div className="item">
      <h4>{props.item.name} (Added: <Moment date={props.item.created_at} fromNow />)</h4>
      <p>{props.item.description}</p>
    </div>
  )
}

export default Item
