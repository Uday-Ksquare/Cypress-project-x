describe("Check Contact", () => {
  it("Check Contact", () => {
    cy.visit("https://www.udaykumar.tech/");
    cy.url().should("eq", "https://www.udaykumar.tech/");
    cy.get("input#name").type("Uday Kumar").should("have.value", "Uday Kumar");
    cy.get("#outlined-basic")
      .type("7670848696")
      .should("have.value", "7670848696");
    cy.get("#emailID")
      .type("udaykumarvalapudasu@gmail.com")
      .should("have.value", "udaykumarvalapudasu@gmail.com");
  });

  it.only("Check Not Found Page", () => {
    cy.visit("https://www.udaykumar.tech/No");
    cy.url().should("eq", "https://www.udaykumar.tech/No");
    cy.get(".text-2xl").should("contain", "404");
    cy.get(".font-bold").should("contain", "Page not found");
    cy.get('[data-testid="WestIcon"]').click();
    cy.url().should("eq", "https://www.udaykumar.tech/");
  });
});
