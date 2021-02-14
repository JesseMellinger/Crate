import { get } from "../../../src/modules/product/api/actions";

describe("Testing Website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/user/login");

    cy.get("input:first")
      .should("have.attr", "placeholder", "Email")
      .type("user@crate.com")
      .get("input:last")
      .should("have.attr", "placeholder", "Password")
      .type("123456")
      .get("button:last")
      .should("contain", "Login")
      .click()
      .url()
      .should("include", "/crates");
  });

  it("Should be able to go to USER and see the account info", () => {
    cy.get("a")
      .filter(':contains("User")')
      .click()
      .url()
      .should("include", "/user/account");

    cy.get("a")
      .filter(':contains("Account")')
      .should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("a")
      .filter(':contains("Order History")')
      .should("have.css", "color", "rgb(0, 0, 0)");

    cy.get("[alt='user-profile-image']")
      .should("be.visible")
      .get("img:last")
      .should(
        "have.attr",
        "src",
        "https://image.flaticon.com/icons/png/512/61/61456.png"
      );

    cy.get("img:last").should(
      "have.attr",
      "src",
      "https://image.flaticon.com/icons/png/512/61/61456.png"
    );
  });

  it("Should route to the edit user infor page on click of edit button", () => {
    cy.get("a")
      .filter(':contains("User")')
      .click()
      .url()
      .should("include", "/user/account");

    cy.get("img:last")
      .should(
        "have.attr",
        "src",
        "https://image.flaticon.com/icons/png/512/61/61456.png"
      )
      .click();

    cy.url("http://localhost:3000/user/edit");
  });

  it("Should be able to navigate to order history within the USER account view", () => {
    cy.get("a")
      .filter(':contains("User")')
      .click()
      .url()
      .should("include", "/user/account");
    cy.get("a").filter(':contains("Order History")').click();

    cy.url("http://localhost:3000/user/history");
  });

  it("Should render all elements in edit user info component", () => {
    cy.get("a").filter(':contains("User")').click();

    cy.get("img:last")
      .should(
        "have.attr",
        "src",
        "https://image.flaticon.com/icons/png/512/61/61456.png"
      )
      .click();

    cy.get("[data-cy=edit-info-title]").should("be.visible");
    cy.get("[data-cy=name-input]").should("be.visible");
    cy.get("[data-cy=email-input]").should("be.visible");
    cy.get("[data-cy=bio-text-area]").should("be.visible");
    cy.get("[data-cy=shipping-address-text]").should("be.visible");
    cy.get("[data-cy=submit-button]").should("be.visible");
  });
});
