it("should load the page", () => {
  cy.visit("/");
  cy.findAllByText(/learn react/i).should("have.length", 1);
});
