import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import './setupTests'
import App from './App'

afterEach(cleanup)

describe('Initial State', () => {
  test('App renders heading and list', () => {
    const { debug } = render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('ToDos')
  })
})