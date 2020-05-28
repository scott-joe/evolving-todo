import React from 'react'
import '../styles/item.css'

export default function Item({data, onRemove}) {
  return (
    <li
      key={data.id}
      data-testid="item"
      className="item"
    >
      <span className="item-label" data-testid="item-label">{data.text}</span>
      <span role="img" aria-label="close" data-testid="item-remove" onClick={() => onRemove({id: data.id})}>❌</span>
    </li>
  )
}