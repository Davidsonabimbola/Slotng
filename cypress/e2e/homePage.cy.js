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

    // sign in by existing user

    cy.get('[id="email"][name="login[username]"').type('stalkerdaveman007@yahoo.com')
    cy.get('[id="pass"][name="login[password]"').type('34.Stalkguru')

    cy.get('button[id="send2"]').contains('Sign In').as('signIn_button')
    cy.get('@signIn_button').click()

    // check products

    cy.get('[class="navigation verticalmenu side-verticalmenu"]').as('menu').click()
    cy.get('@menu').get('ul').get('li').contains('Phones and Tablets').as('choiceProduct')
    cy.get('@choiceProduct').contains('Phones and Tablets').get('link').eq(0).click({force:true})

    cy.get('[id="maincontent"]').should('be.visible')
    
    

  })
})