/* global it, describe, expect, mount, jest */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { GlobalContext } from '../context/GlobalState'
import ContactFilter from './ContactFilter'

describe('<ContactFilter />', () => {
  it('renders the contact filter buttons', () => {
    const component = mount(<ContactFilter />)
    const filterButtons = component.find('button')
    expect(filterButtons.length).to.eql(3)
  })
  it('calls onclick functions', () => {
    const sortAscending = jest.fn()
    const sortDescending = jest.fn()
    const clearSort = jest.fn()
    const component = render(
      <GlobalContext.Provider value={{ sortAscending, sortDescending, clearSort }}>
        <ContactFilter />
      </GlobalContext.Provider>
    )

    const sortAZ = component.getByText('Sort A-Z')
    fireEvent.click(sortAZ)
    expect(sortAscending).to.have.beenCalled()

    const sortZA = component.getByText('Sort Z-A')
    fireEvent.click(sortZA)
    expect(sortDescending).to.have.beenCalled()

    const clear = component.getByText('Reset Sort')
    fireEvent.click(clear)
    expect(clearSort).to.have.beenCalled()
  })
})
