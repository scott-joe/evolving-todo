import React from "react";
import Item from "./Item"
// import '../styles/list.css';

export default function List({data}) {
  return (
    <ul data-testid="todo-list">
      {data.map(item => (
        <Item key={item.id} text={item.label} />
      ))}
    </ul>
  )
}