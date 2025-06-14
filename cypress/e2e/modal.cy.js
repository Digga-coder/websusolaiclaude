describe('project modal', () => {
  it('opens project details modal', () => {
    cy.visit('/portafolio.html');
    cy.injectAxe();
    cy.checkA11y();
    cy.get('.view-details-btn').first().click();
    cy.get('#projectModal').should('have.css', 'display', 'flex');
  });
});
