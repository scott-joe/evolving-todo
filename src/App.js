import React, { useState } from "react";
import List from "./components/List"
import { generateId } from "./utils"
import './styles/app.css';

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setList(list => [
      ...list,
      {
        id: generateId(),
        label: inputValue
      }
    ])
    setInputValue('')
  }
  
  return (
    <div className="App">
      <header role="heading">ToDos</header>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="New Todo..."
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <List data={list} />
    </div>
  )
}

export default App;
