/// <reference types="cypress" />

describe('test_suite hetta', () => {
  beforeEach(() => {
    cy.visit('https://hetta.com/')
    cy.wait(10000)
    cy.get(".go2230318609").click()
  })

  it.skip("All Sofas & Sectionals approve", ()=>{
    
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(0).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title').first().should("contain","All Sofas & Sectionals")

    cy.wait(10000)

  }) 
  it.skip("  All Beds approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(1).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","All Beds")

    cy.wait(10000)

  }) 
  it.skip("  All Tables approve", ()=>{
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(2).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Tables")

    cy.wait(10000)

  }) 

it.skip("  All seating approve", ()=>{
   
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(3).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","All Seating")

    cy.wait(10000)

  }) 
  it.skip("  All Storage approve", ()=>{

    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(4).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Storage")

    cy.wait(10000)

  }) 

  it.skip("  All Accents approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(0).click()
    cy.get(".mobile-menu__list2__item__button").eq(5).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Accents")

    cy.wait(10000)

  }) 

  it.skip("  All living rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(0).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Living")

    cy.wait(10000)

  }) 

  it.skip("  All bedroom rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(1).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Bedroom")

    cy.wait(10000)

  }) 

  it.skip("  All dining rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(2).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Dining")

    cy.wait(10000)

  }) 

  it.skip("  All entryway rooms approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.get(".mobile-menu__list2__item__button").eq(3).click()
    cy.get(".mobile-menu__list3__item__button").eq(0).click()
    cy.get('.collection__title  ').first().should("contain","Console Tables")

    cy.wait(10000)

  }) 

it.skip("  About us approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('The Brand').click({force: true})
    cy.get('#shopify-section-about-us').first().should("be.visible")

    cy.wait(10000)

  }) 
  it.skip(" the NYC Pop Up approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('NYC Pop Up').click({force: true})
    cy.get('#shopify-section-showrooms').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" Archive approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('The Archive').click({force: true})
    cy.get('#shopify-section-the-archive').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" Trade Program approve", ()=>{
    
    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('Trade Program').click({force: true})
    cy.get('#shopify-section-trade').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" Hetta Essentials approve", ()=>{

    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(2).click()
    cy.contains('Hetta Essentials').click({force: true})
    cy.get('.collection__title  ').first().should("contain","Hetta Essentials") 
    cy.wait(10000)

  }) 

  it.skip(" Trade Program approve", ()=>{

    cy.get(".header__logo__link").click()
    cy.get("#header-menu-toggle").click()
    cy.get(".mobile-menu__list1__item__button").eq(1).click()
    cy.contains('Trade Program').click({force: true})
    cy.get('#shopify-section-trade').first().should("be.visible")
    cy.wait(10000)

  }) 

  it.skip(" about us homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(0).click()
    cy.get('#shopify-section-about-us').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" contact us homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(1).click()
    cy.get('#shopify-section-contact').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" shipping & returns homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(2).click()
    cy.get('#shopify-section-shipping-and-returns').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" NYC Pop Up homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(3).click()
    cy.get('#shopify-section-showrooms').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" FAQ approve", ()=>{
    
    cy.get(".footer-menu__link").eq(4).click()
    cy.get('#shopify-section-faq').first().should("be.visible")

    cy.wait(10000)

  }) 

   it.skip(" Affirm FAQ approve", ()=>{
    
    cy.get(".footer-menu__link").eq(5).click()
    cy.get('#shopify-section-bnpl-faq').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" trade program homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(6).click()
    cy.get('#shopify-section-trade').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" the The Archive homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(7).click()
    cy.get('#shopify-section-the-archive').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip(" the Terms of service homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(8).click()
    cy.get('.page-title').first().should("contain","Terms of service") 
    cy.wait(10000)

  }) 


  it.skip(" the 5 year warranty homepage approve", ()=>{
    
    cy.get(".footer-menu__link").eq(9).click()
    cy.get('#shopify-section-warranty').first().should("be.visible")

    cy.wait(10000)

  }) 

  it.skip("search a chair", ()=>{
   
    cy.get('button[title="search"]').click({force:true})
    cy.get('#search-input').type('chair')
    cy.wait(5000)
    cy.get('.preview-item').eq(0).click()
    cy.url().should('include', 'chair')
    cy.wait(10000)
  }) 

  
})