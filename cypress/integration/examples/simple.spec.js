// <reference types="Cypress" />

context('simple test to google sunflowers', () => {
  before(() => {
    cy.visit('www.google.com')
  });
  it('enter sunflower', () => {
    cy.get('.gLFyf')
        .type('sunflower').should('have.value', 'sunflower')
  });
  it('click on search', () => {
    // cy.contains('Google Search').click();
    cy.contains('sunflower seeds').click();
  });
  it('searching images', () => {
    cy.contains('Images').click();
    cy.get('.rg_ic').should('be.visible');
    cy.url().should('contain', '/search?q=sunflower+seeds');

  //
  // });
  // describe('todos API', () => {
  //   it('returns JSON', () => {
  //     cy.request('http://localhost:8000/todos')
  //         .its('headers')
  //         .its('content-type')
  //         .should('include', 'application/json')
  //   })
  })
});
