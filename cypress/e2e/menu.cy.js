Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar errores de mi app para que no rompan el test
  return false;
});

describe('menu', () => {
  it('toggles mobile menu', () => {
    cy.visit('/index.html');
    cy.injectAxe();
    cy.checkA11y();
    cy.get('#mobile-menu').click();
    cy.get('.nav-menu').should('have.class', 'is-active');
    cy.get('#mobile-menu').click();
    cy.get('.nav-menu').should('not.have.class', 'is-active');
  });
});
