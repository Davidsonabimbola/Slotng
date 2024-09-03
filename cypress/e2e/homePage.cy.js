/// <reference types="cypress" />
describe('template spec', () => {

  beforeEach(() => {
    // Prevent Cypress from failing the test on uncaught exceptions
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('closeSidebar is not defined')) {
        return false; // Prevents Cypress from failing the test
      }
      // if you want to ignore other errors as well, handle them here
    });
  });
  it('passes', () => {
    cy.visit('https://slot.ng')
    cy.get('[class="header links"]').then((header_list)=>{
cy.wrap(header_list).get('li').get('a').contains('My Account').click()
    })
  })
})