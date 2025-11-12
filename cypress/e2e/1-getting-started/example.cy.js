/// <refrence types="cypress"/>
it('google search', () => {
    cy.visit('https://example.cypress.io')
    cy.wait(2000)
    cy.contains('Querying').click({force: true})
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')

    assert.equal(4,4,'4 is equal 4')
})

    // cy.get('body');
    // cy.viewport(window.screen.width, window.screen.height);