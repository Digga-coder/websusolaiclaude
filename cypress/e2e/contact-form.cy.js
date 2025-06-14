describe('contact form', () => {
  it('submits form and displays success modal', () => {
    cy.intercept('POST', 'https://formspree.io/**', { statusCode: 200 }).as('form');
    cy.visit('/contacto.html');
    cy.injectAxe();
    cy.checkA11y();
    cy.get('#name').type('Test User');
    cy.get('#email').type('test@example.com');
    cy.get('#service').select(1);
    cy.get('#message').type('Hello there');
    cy.get('#mainContactForm').submit();
    cy.wait('@form');
    cy.get('#successModal').should('have.attr', 'aria-hidden', 'false');
  });
});
