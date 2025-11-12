/// <reference types="cypress" />

describe('test_suite sunday', () => {
  beforeEach(() => {
    cy.visit('https://www.sundays-company.com/')
    cy.wait(10000)
    cy.get(".go2383765152").click()
  })

  it.skip("All Sofas & Sectionals approve", ()=>{
    
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(0).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title').first().should("contain","All Sofas & Sectionals")

    cy.wait(1000)

  }) 
  it.skip("  All Beds approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(1).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","All Beds")

    cy.wait(1000)

  }) 
  it.skip("  All Tables approve", ()=>{
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(2).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Tables")

    cy.wait(1000)

  }) 

it.skip("  All seating approve", ()=>{
   
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(3).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Chairs")

    cy.wait(1000)

  }) 
  it.skip("  All Storage approve", ()=>{

    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(4).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Storage")

    cy.wait(1000)

  }) 

  it.skip("  All Outdoor approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(5).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Outdoor")

    cy.wait(1000)

  }) 

  it.skip("  All Accessories approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(6).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Accessories")

    cy.wait(1000)

  }) 

  it.skip("  All living rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(0).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Living Room")

    cy.wait(1000)

  }) 

  it.skip("  All bedroom rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(1).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Bedroom")

    cy.wait(1000)

  }) 

  it.skip("  All dining rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(2).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Dining Room")

    cy.wait(1000)

  }) 

  it.skip("  All outdoor rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(3).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Outdoor")

    cy.wait(1000)

  }) 

  it.skip("  All home office rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(4).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Home Office")

    cy.wait(1000)

  }) 

  it.skip("  All entryway rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(5).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Entryway")

    cy.wait(1000)

  }) 

it.skip("  About us approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('About Us').click({force: true})
    cy.get('#shopify-section-about-us').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the journal approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('The Journal').click({force: true})
    cy.get('#shopify-section-the-journal').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" trade program approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('Trade Program').click({force: true})
    cy.get('#shopify-section-trade').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" Showrooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('Showrooms').click({force: true})
    cy.get('#shopify-section-showrooms').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" Reviews approve", ()=>{

    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('Reviews').click({force: true})
    cy.get('#shopify-section-sundays-customer-reviews').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" about us homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(0).click()
    cy.get('#shopify-section-about-us').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" contact us homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(1).click()
    cy.get('#shopify-section-contact').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" shipping & returns homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(2).click()
    cy.get('#shopify-section-shipping-and-returns').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" showrooms homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(3).click()
    cy.get('#shopify-section-showrooms').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" FAQ approve", ()=>{
    
    cy.get(".footer-menu__link").eq(4).click()
    cy.get('#shopify-section-faq').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" trade program homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(5).click()
    cy.get('#shopify-section-trade').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the journal homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(6).click()
    cy.get('#shopify-section-the-journal').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the eGift cards homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(7).click()
    cy.get('#shopify-section-product').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the customer reviews homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(8).click()
    cy.get('#shopify-section-sundays-customer-reviews').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the Terms of service homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(9).click()
    cy.get('.shopify-policy__container').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the Shop pay installments homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(10).click()
    cy.get('#shopify-section-bnpl-faq').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the careers homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(11).click()
    cy.get('#shopify-section-careers').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip(" the 5 year warranty homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(12).click()
    cy.get('#shopify-section-warranty').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip("click best sellers", ()=>{
   
    cy.contains('Best Sellers').click({force:true})
    cy.get('.collection__title__contents').should("contain","Best Sellers")

    cy.wait(1000)

  }) 

  it.skip("click new arrivals", ()=>{
   
    cy.contains('New Arrivals').click({force:true})
    cy.get('.collection__title__contents').should("contain","New Arrivals")

    cy.wait(1000)

  }) 

  it.skip("click trade program", ()=>{
   
    cy.contains('Trade Program').click({force:true})
    cy.get('.trade-title').should("contain","Trade Program")

    cy.wait(1000)

  }) 

  it.skip("click holiday gifts", ()=>{
   
    cy.contains('Holiday Gifts').click({force:true})
    cy.get('#shopify-section-color-swatches').first().should("be.visible")

    cy.wait(1000)

  }) 

  it.skip("click special prices", ()=>{
   
    cy.contains('Special Prices').click({force:true})
    cy.get('#shopify-section-minicart').first().should("be.visible")

    cy.wait(1000)
  }) 

  it.skip("search a chair", ()=>{
   
    cy.get('button[title="search"]').click({force:true})
    cy.get('#search-input').type('chair')
    cy.wait(5000)
    cy.get('.preview-item').eq(0).click()
    cy.url().should('include', 'chair')
    cy.wait(1000)
  }) 

  
})