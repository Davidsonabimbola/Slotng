class calls{
    checkProducts(){
        cy.get('[class="navigation verticalmenu side-verticalmenu"]').as('menu').click()
    cy.get('@menu').get('ul').get('li').contains('Phones and Tablets').as('choiceProduct')
    cy.get('@choiceProduct').contains('Phones and Tablets').get('link').eq(0).click({force:true})
    //cy.get('@choiceProduct').contains('Phones and Tablets').get('link').eq(0).trigger('mouseover')
    cy.get('[id="maincontent"]').should('be.visible')
    }

    selectProduct(ProductName){

        cy.get('[class="togge-menu list-category-dropdown"]').as('dropdown')//ul
    cy.get('@dropdown').get('[class="ui-menu-item level0 fullwidth parent "]').as('firstDropdown') //li
    cy.get('@firstDropdown').get('[class="subchildmenu col-sm-12 mega-columns columns4"]').as('secondDropdown')//ul
    cy.get('@secondDropdown').get('li').get('a').contains('Phones').click({force:true})

    cy.get('[class="items pages-items"]').then((secondPage)=>{
      cy.wrap(secondPage).get('[class="item"]').get('a').contains('Page').click({force:true})
    })
    cy.get('[id="layered-ajax-list-products"]').should('be.visible')

    if (cy.get('[class="row product-grid container-products-switch products  category_page_grid_4"]')){
      cy.get('[class="row product-grid container-products-switch products  category_page_grid_4"]').then((allPhones)=>{
        cy.wrap(allPhones).get('[class="item-product"]').contains(ProductName).as('Phonelist')
        cy.get('@Phonelist').get('[class="product-thumb"]').get('[class="product-info"]').as('productSelect')
        cy.get('@productSelect').get('a').contains(ProductName).click({force:true})
            })
    }
    else{
      cy.get('[class="row product-grid container-products-switch products  category_page_grid_4"]').then((allPhones)=>{
        cy.wrap(allPhones).get('[class="item-product"]').eq(0).as('Phonelist')
        cy.get('@Phonelist').get('[class="product-thumb"]').get('[class="product-info"]').as('productSelect')
        cy.get('@productSelect').get('a').eq(0).click()
            })
    }
    }

    increase_orderCount(){
        cy.get('[class="fa fa-plus"]').click()
    }

    add_toCart(){
        cy.get('[id="product-addtocart-button"]').click()
    }

    viewCart(){
        cy.get('[class="ajaxsuite-buttons"]').then((Continue_OR_View)=>{
            cy.wrap(Continue_OR_View).get('button').contains('View Cart').click()
                })
    }

    checkOut(){
        cy.get('.item > .action') //checkout button
    }
    


}
export default new calls()