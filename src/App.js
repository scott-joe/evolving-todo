import React, { useState } from "react";
import './style/app.css';

function generateId() {
  return Math.round(Math.random() * (9999999 - 1000000)) + 1000000;
}

function List({data}) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  )
}

function App() {
  const [list, setList] = useState([
    { id: generateId(), label: 'One' },
    { id: generateId(), label: 'Two' },
    { id: generateId(), label: 'Three' },
  ])
  
  return (
    <div className="App">
      <header role="heading">ToDos</header>
      <section>
        <input />
        <button>Add</button>
      </section>
      <section>
        <List data={list} />
      </section>
    </div>
  )
}

export default App;
