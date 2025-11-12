/// <reference types="cypress" />

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it("first inspector", ()=>{
    cy.get("input[type=email]").type("amir is here")
    cy.get("input[type=email]").then((element)=> {
        cy.log("text from input : "+element.val())
    })

    cy.get("#email1").then((element)=> {
        cy.log("text from input : "+element.val())
    })
    cy.get('.form-control' ).first().click()
    cy.get('.form-control' ).last().select('apples')
    cy.get('.form-control' ).eq(2).click()

    cy.get('input[placeholder^="Ema"]').click()
    cy.get('input[placeholder$="ail"]').click()
    cy.get('input[placeholder*="ail"]').click()
    cy.contains('Click to toggle popover').click()

    cy.get('form > div').eq(2).click()
  }) 
})