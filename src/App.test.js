import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import './setupTests'
import App from './App'

afterEach(cleanup)

describe('App Component', () => {
  test('Renders heading and list', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('ToDos')
    expect(screen.getByTestId('list')).toBeInTheDocument()
  })
})