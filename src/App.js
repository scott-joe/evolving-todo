import React, { useState, useEffect } from 'react'
import List from './components/List'
import Item from './components/Item'
import { generateId, log } from './utils'
import './styles/app.css'

const useStorage = () => {
  const initStore = () => JSON.parse(window.localStorage.getItem('list') || "[]")
  const [list, setList] = useState(initStore)
  useEffect(() => {
    window.localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return [list, setList]
}

function App() {
  const [list, setList] = useStorage()
  const [inputValue, setInputValue] = useState('')

  const handleUpdateInput = e => {
    log('app.handleUpdateInput', 'handler')
    setInputValue(e.target.value)
  }

  const handleRemoveItem = ({id}) => {
    log('app.handleRemoveItem', 'handler')
    setList(list.filter(item => item.id !== id))
  }

  const handleUpdateItem = ({ id }) => {
    log('app.handleUpdateItem', 'handler')
    setList(list.map(item => {
      return (item.id === id) ? { ...item, complete: !item.complete } : item
    }));
  };

  const handleNewItem = e => {
    log('app.handleNewItem', 'handler')
    e.preventDefault()
    if (inputValue !== '') {
      setList(list => [
        ...list,
        {
          id: generateId(),
          text: inputValue,
          complete: false
        }
      ])
      setInputValue('')
    }
  }
  
  return (
    <div className="App">
      {log('app.main', 'container')}
      <header role="heading">ToDos</header>
      <form onSubmit={handleNewItem}>
        <input type="text" placeholder="New Todo..." value={inputValue} onChange={handleUpdateInput} />
      </form>
      <List>
        {list.map(item => (
          <Item
            key={item.id}
            data={item}
            complete={item.complete}
            onChange={handleUpdateItem}
            onRemove={handleRemoveItem}
          />
        ))}
      </List>
    </div>
  )
}

export default App;
