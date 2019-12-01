/// <reference types="Cypress" />

context('simple test to google sunflowers', () => {
  before(() => {
    cy.visit('www.google.com')
  });
    it('enter sunflower', () => {
      cy.get('.gLFyf')
          .type('sunflower').should('have.value', 'sunflower')
    });
    it('click on search', () => {
      cy.contains('Google Search').click();
    // cy.get('.gNO89b').click();
    });
    it('searching images', () => {
      cy.contains('Images').click();
  });
});
