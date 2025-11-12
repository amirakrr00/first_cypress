/// <refrence types="cypress"/>

describe('assertions test', function(){
    it('asertion1', function(){
        cy.log("the start of test")
        cy.visit('https://virgool.io/')
        cy.log("navigated to varzesh3 site")
        cy.get('input[id="searchInput"]').click().type("javascript")
        cy.get('.direction-rtl').first().click({force: true})
        cy.get('a[title="json in javascript"]>h3').first().then((element) => {
           expect(element.text()).to.equal("json in javascript")
        })
        cy.get('a[title="json in javascript"]>h3').first().should("have.text","json in javascript")
        cy.get('a[title="json in javascript"]>h3').first().should("contain","json in javascript")
        cy.get('a[title="json in javascript"]>h3').first().should("be.visible")
        cy.get('a[title="json in javascript"]>h3').first().should("have.html","json in javascript")
        cy.get('a[title="json in javascript"]>h3').first().should("have.html","json in javascript").and("have.attr","style")
        cy.get('a[title="json in javascript"]>h3').first().should("have.html","json in javascript").and("have.attr","style").and("include","-webkit-line-clamp: 2;")
        cy.get('a[title="json in javascript"]>h3').first().then((element) => {
           expect(element.text()).to.have.length(18)
        })
    })
})