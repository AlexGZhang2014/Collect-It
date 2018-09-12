import React from 'react'

const Item = props => {
  return (
    <div className="item">
      <h4>{props.item.name}</h4>
      <p>{props.item.description}</p>
    </div>
  )
}

export default Item