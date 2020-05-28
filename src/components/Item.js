import React from "react";
// import '../styles/item.css';

export default function Item({text}) {
  return <li data-testid="todo-list-item">{text}</li>
}