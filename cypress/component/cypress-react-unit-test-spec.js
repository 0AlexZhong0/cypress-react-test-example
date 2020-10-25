import { mount } from 'cypress-react-unit-test'
import React from 'react'
import Greeting from '../../Greeting'

describe('cypress-react-unit-test', () => {
  it('shows greeting', () => {
    mount(<Greeting />)
    cy.contains('Hello World')
  })

  it('changes greeting on click', () => {
    mount(<Greeting />)
    cy.get('button').click()
    cy.contains('Bonjour World')
  })
})
