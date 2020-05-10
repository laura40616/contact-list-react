/* global it, describe, expect, mount, jest */
import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import ContactList from './ContactList'

describe('<ContactList />', () => {
  const contacts = [
    {
      id: 1,
      name: 'Test Name',
      email: 'test@test.com',
      address: {
        street: '123 W Main',
        suite: '11',
        city: 'City',
        zip: '55555'
      }
    },
    {
      id: 2,
      name: 'Another Test Name',
      email: 'another@test.com',
      address: {
        street: '456 W Test',
        suite: '22',
        city: 'City',
        zip: '11111'
      }
    }
  ]
  it('renders the contact list component', () => {
    const component = mount(
      <GlobalContext.Provider value={{ contacts, searchResult: [], removeContact: jest.fn() }}>
        <ContactList />
      </GlobalContext.Provider>
    )
    expect(component.find('li').length).to.eql(2)
  })

  it('will display search results', () => {
    const searchResult = [{
      id: 3,
      name: 'Search Result',
      email: 'search@result.com',
      address: {
        street: '456 W Test',
        suite: '22',
        city: 'City',
        zip: '33333'
      }
    }]
    const component = mount(
      <GlobalContext.Provider value={{ contacts, searchResult, removeContact: jest.fn() }}>
        <ContactList />
      </GlobalContext.Provider>
    )
    expect(component.find('li').length).to.eql(1)
  })

  it('has a remove button', () => {
    const removeContact = jest.fn()
    const component = mount(
      <GlobalContext.Provider value={{ contacts, searchResult: [], removeContact }}>
        <ContactList />
      </GlobalContext.Provider>
    )
    const removeButton = component.find('button')
    removeButton.at(0).simulate('click')
    expect(removeContact).to.have.beenCalledWith(contacts[0])
  })
})
