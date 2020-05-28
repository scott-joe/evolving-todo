import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '../setupTests'
import List from './List'

afterEach(cleanup)

describe('List Component', () => {
  test('Given array of items, renders as expected', () => {
    const data = [
      { id: 102391010, label: 'Item1' },
      { id: 616549865, label: 'Item2' },
      { id: 654684651, label: 'Item3' },
    ]
    const { debug } = render(<List data={data} />)
    expect(screen.getByText(data[0].label)).toBeInTheDocument()
    expect(screen.getByText(data[1].label)).toBeInTheDocument()
    expect(screen.getByText(data[2].label)).toBeInTheDocument()
  })
  test('Given empty array, renders as expected', () => {
    const data = []
    const { debug } = render(<List data={data} />)
    expect(screen.getByTestId('todo-list')).toBeInTheDocument()
    expect(screen.getByTestId('todo-list')).toBeEmpty()
  })
})