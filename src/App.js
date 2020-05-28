import React, { useState } from 'react'
import List from './components/List'
import Item from './components/Item'
// import { List, Item } from './components'
import { generateId } from './utils'
import './styles/app.css'

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleUpdateInput = e => {
    setInputValue(e.target.value)
  }

  const handleRemoveItem = ({id}) => {
    setList(list.filter(item => item.id !== id))
  }

  const handleSubmitItem = e => {
    e.preventDefault()
    setList(list => [
      ...list,
      {
        id: generateId(),
        text: inputValue
      }
    ])
    setInputValue('')
  }
  
  return (
    <div className="App">
      <header role="heading">ToDos</header>
      <form onSubmit={handleSubmitItem} >
        <input
          type="text"
          placeholder="New Todo..."
          value={inputValue}
          onChange={handleUpdateInput}
        />
      </form>
      <List>
        {list.map(item => (
          <Item
            key={item.id}
            data={item}
            // onChange={handleChangeItem}
            onRemove={handleRemoveItem}
          />
        ))}
      </List>
    </div>
  )
}

export default App;
