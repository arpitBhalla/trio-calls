/// <reference types="cypress" />

describe("Test new User Registration Workflow", () => {
  before("Register a new user", () => {
    cy.visit("/");
    cy.url().should("equal", `${Cypress.config().baseUrl}/auth/login`);
    cy.get("[data-cy=btn-signin]").click();
  });
});
