import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '../setupTests'
import jest from 'jest-mock';
import List from './List'

afterEach(cleanup)

describe('List Component', () => {
  test('Given data, renders as expected', () => {
    const list = [
      { id: 102391010, text: 'TestItem1', complete: false },
      { id: 651685436, text: 'TestItem2', complete: false },
      { id: 651684654, text: 'TestItem3', complete: false },
      { id: 646813135, text: 'TestItem4', complete: false },
    ]
    render(
      <List>
        {list.map(item => (
          <p key={item.id}>{item.text}</p>
        ))}
      </List>
    )
    expect(screen.getAllByText(/TestItem[0-9]+/i).length).toEqual(4)
    expect(screen.getByText(list[0].text)).toBeInTheDocument()
    expect(screen.getByText(list[1].text)).toBeInTheDocument()
    expect(screen.getByText(list[2].text)).toBeInTheDocument()
    expect(screen.getByText(list[3].text)).toBeInTheDocument()
  })
  // test('Remove button registers click', () => {
  //   const item = { id: 102391010, text: 'TestItem3' }
  //   const handleRemoveItem = jest.fn();
  //   const { debug } = render(
  //     <Item
  //       key={item.id}
  //       data={item}
  //       onRemove={handleRemoveItem}
  //     />
  //   )
  //   fireEvent.click(screen.getByTestId('item-remove'))
  //   expect(handleRemoveItem).toHaveBeenCalledTimes(1)
  // })
})