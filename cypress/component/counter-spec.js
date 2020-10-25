/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Counter from '../../Counter'

describe('Counter using hooks', () => {
  it('works', () => {
    mount(<Counter />)
    cy.contains('Current value: 0')

    cy.contains('Increment')
    .click()
    .click()

    cy.contains('Current value: 2')

    cy.contains('Decrement').click()

    cy.contains('Current value: 1')
  })
})
