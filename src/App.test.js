/* global it, describe, expect */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('renders the contact link', () => {
    const { getByText } = render(<App />)
    const headerText = getByText(/Contact List/i)
    expect(headerText.innerHTML).to.match(/Contact List/i)
  })
})
