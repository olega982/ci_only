/// <reference types="cypress"/>

describe('empty spec', () => {
  it('passes', () => {
    cy.visit(' http://localhost:4200/')
    cy.contains('Layout').click()
    cy.contains('Stepper').click()
    cy.get('.step-content').eq(0).should('contain','Step content #1')
  })
})