/// <reference types="Cypress" />

context('simple test to order chipotle', () => {
  beforeEach(() => {
    cy.visit('https://order.chipotle.com')
  });

  it('click on location', () => {
    cy.get('.ng-pristine .ng-valid .ng-empty ng-touched')
      .type('07302').should('have.value', '07302')

      // Delay each keypress by 0.1 sec
      .type('slow.typing@email.com', { delay: 100 })
      .should('have.value', 'slow.typing@email.com');

    cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')
  });
  //
  // it('.focus() - focus on a DOM element', () => {
  //   cy.get('.action-focus').focus()
  //     .should('have.class', 'focus')
  //     .prev().should('have.attr', 'style', 'color: orange;')
  // });
});
