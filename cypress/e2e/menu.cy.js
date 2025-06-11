describe('menu', () => {
  it('toggles mobile menu', () => {
    cy.visit('/index.html');
    cy.checkA11y();
    cy.get('#mobile-menu').click();
    cy.get('.nav-menu').should('have.class', 'is-active');
    cy.get('#mobile-menu').click();
    cy.get('.nav-menu').should('not.have.class', 'is-active');
  });
});
