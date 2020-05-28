import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '../setupTests'
import jest from 'jest-mock';
import Item from './Item'

afterEach(cleanup)

describe('Item Component', () => {
  test('Given text, renders as expected', () => {
    const item = { id: 102391010, text: 'TestItem1' }
    const { debug } = render(
      <Item
        key={item.id}
        data={item}
        onRemove={()=>{}}
      />)
    expect(screen.getByText(item.text)).toBeInTheDocument()
  })
  test('Given empty label, renders as expected', () => {
    const item = { id: 102391010, text: '' }
    const { debug } = render(
      <Item
        key={item.id}
        data={item}
        onRemove={()=>{}}
      />)
    expect(screen.getByTestId('item-label')).toBeInTheDocument()
    expect(screen.getByTestId('item-label')).toBeEmpty()
  })
  test('Remove button registers click', () => {
    const item = { id: 102391010, text: 'TestItem3' }
    const handleRemoveItem = jest.fn();
    const { debug } = render(
      <Item
        key={item.id}
        data={item}
        onRemove={handleRemoveItem}
      />
    )
    fireEvent.click(screen.getByTestId('item-remove'))
    expect(handleRemoveItem).toHaveBeenCalledTimes(1)
  })
})