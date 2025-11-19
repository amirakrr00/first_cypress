/// <refrence types="cypress"/>

describe('first example', function(){
    it.skip('test1', function(){
        cy.log("the start of test")
        cy.visit('https://www.youtube.com/')
        cy.wait(5000)
        cy.log("navigated to youtube site")
        cy.get('#content button[aria-label="Accept the use of cookies and other data for the purposes described"] div.yt-spec-touch-feedback-shape__fill').click();
        cy.get('input[name="search_query"]').click().type("javascript by testers talk")
        cy.get('button[title="Search"]').click()
    })
})