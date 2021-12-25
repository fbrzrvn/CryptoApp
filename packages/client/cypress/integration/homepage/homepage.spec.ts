/// <reference types="cypress" />

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('cy.location() navigates to the urls', () => {
    it("renders '/' location", () => {
      cy.location().should((location) => {
        // eslint-disable-next-line jest/valid-expect
        expect(location.href).to.eq(`${Cypress.env('baseUrl')}/`);
        // eslint-disable-next-line jest/valid-expect
        expect(location.pathname).to.eq('/');
      });
    });
  });
});
