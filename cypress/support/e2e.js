import './commands';
import 'cypress-axe';

beforeEach(() => {
  cy.injectAxe();
});
