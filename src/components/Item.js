import React, { memo } from 'react'
import { log } from '../utils'
import '../styles/item.css'

function CoreItem({data, complete, onChange, onRemove}) {
  return (
    <li key={data.id} data-testid="item" className="item">
      {log('item.main', 'component', 4)}
      <span className="complete-toggle">
        <input
          type="checkbox"
          id={`item-${data.id}-complete`}
          name={`item-${data.id}-complete`}
          checked={complete}
          onChange={() => onChange({ id: data.id })}
        />
        <label
          htmlFor={`item-${data.id}-complete`}
          className="item-label"
          data-testid="item-label"
        >
          {data.text}
        </label>
      </span>
      <span
        role="img"
        aria-label="close"
        data-testid="item-remove"
        onClick={() => onRemove({ id: data.id })}
      >
        ❌
      </span>
    </li>
  );
}

const Item = memo(CoreItem)
export default Item
