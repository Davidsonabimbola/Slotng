/// <reference types="cypress" />
import placeOrder from "../../Pages/placeOrder";
describe('template spec', () => {

  beforeEach(() => {
    // Prevent Cypress from failing the test on uncaught exceptions
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('closeSidebar is not defined')) {
        return false; // Prevents Cypress from failing the test
      }
      // if you want to ignore other errors as well, handle them here
    //   var Email = 'stalkerdaveman007@yahoo.com'
    // var passWord = '34.Stalkguru'
    // cy.get('[id="email"][name="login[username]"').type(Email)
    // cy.get('[id="pass"][name="login[password]"').type(passWord)

    // cy.get('button[id="send2"]').contains('Sign In').as('signIn_button')
    // cy.get('@signIn_button').click()
    });
  });
 
  it('passes', () => {
    var Email = 'stalkerdaveman007@yahoo.com'
    var passWord = '34.Stalkguru'
    var ProductName = 'Apple iPhone 15 Pro 256GB Single Sim'
    //var Category = 'Phones and Tablets'
    cy.visit('https://slot.ng')
    cy.get('[class="header links"]').then((header_list)=>{
cy.wrap(header_list).get('li').get('a').contains('My Account').click()
    })

    //sign in by existing user
    cy.get('[id="email"][name="login[username]"').type(Email)
    cy.get('[id="pass"][name="login[password]"').type(passWord)
    cy.get('button[id="send2"]').contains('Sign In').as('signIn_button')
    cy.get('@signIn_button').click()

    placeOrder.checkProducts()
    placeOrder.selectProduct(ProductName)
    placeOrder.add_toCart()
    placeOrder.viewCart()
    placeOrder.checkOut()



  })
})