import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '../setupTests'
import jest from 'jest-mock';
import Item from './Item'

afterEach(cleanup)

const templateItem = {
  id: 102391010,
  text: "TestItem1",
  complete: false,
}

describe('Item Component', () => {
  test('Given text, renders as expected', () => {
    const item = Object.assign({}, templateItem)
    render(
      <Item
        key={item.id}
        data={item}
        complete={item.complete}
        onRemove={()=>{}}
      />)
    expect(screen.getByText(item.text)).toBeInTheDocument()
  })
  test('Given empty label, renders as expected', () => {
    const item = Object.assign({}, templateItem);
    item.text = '';
    render(
      <Item
        key={item.id}
        data={item}
        complete={item.complete}
        onRemove={()=>{}}
      />)
    expect(screen.getByTestId('item-label')).toBeInTheDocument()
    expect(screen.getByTestId('item-label')).toBeEmpty()
  })
  test('Remove button registers click', () => {
    const item = Object.assign({}, templateItem);
    const handleRemoveItem = jest.fn();
    render(
      <Item
        key={item.id}
        data={item}
        complete={item.complete}
        onRemove={handleRemoveItem}
      />
    )
    fireEvent.click(screen.getByTestId('item-remove'))
    expect(handleRemoveItem).toHaveBeenCalledTimes(1)
  })
})