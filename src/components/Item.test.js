import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '../setupTests'
import Item from './Item'

afterEach(cleanup)

describe('Item Component', () => {
  test('Given text, renders as expected', () => {
    const data = { id: 102391010, label: 'Item1' }
    const { debug } = render(<Item key={data.id} text={data.label}/>)
    expect(screen.getByText(data.label)).toBeInTheDocument()
  })
  test('Given empty label, renders as expected', () => {
    const data = { id: 102391010, label: '' }
    const { debug } = render(<Item key={data.id} text={data.label}/>)
    expect(screen.getByTestId('todo-list-item')).toBeInTheDocument()
    expect(screen.getByTestId('todo-list-item')).toBeEmpty()
  })
  test('Given emoji, renders as expected', () => {
    const data = { id: 102391010, label: '🤖' }
    const { debug } = render(<Item key={data.id} text={data.label}/>)
    expect(screen.getByText(data.label)).toBeInTheDocument()
  })
})