import React from "react"
import '../styles/list.css'

export default function List({children}) {
  return (
    <ul data-testid="list" className="list">
      {children}
    </ul>
  )
}