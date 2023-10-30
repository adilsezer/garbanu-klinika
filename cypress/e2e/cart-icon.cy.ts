// cypress/integration/cart_icon_spec.js

describe("CartIcon Component", () => {
  beforeEach(() => {
    // Assuming you'd want to visit the homepage or wherever the CartIcon appears.
    cy.visit("http://localhost:3000/");
  });

  it("should display the cart icon", () => {
    cy.get('img[alt="Heart Icon"]').should("be.visible");
  });

  it("should navigate to /cart when clicked", () => {
    cy.get('img[alt="Heart Icon"]').click();
    cy.url().should("include", "/cart");
  });
});
