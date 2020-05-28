import React, { memo } from "react"
import { log } from '../utils'
import '../styles/list.css'

function CoreList({children}) {
  return (
    <ul data-testid="list" className="list">
      {log('list.main', 'component')}
      {children}
    </ul>
  )
}

const List = memo(CoreList)
export default List
