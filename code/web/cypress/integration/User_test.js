import { get } from "../../src/modules/product/api/actions";

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

    cy.get("img:first")
      .should(
        "have.attr",
        "src",
        "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
      )
      .get("img:last")
      .should(
        "have.attr",
        "src",
        "https://image.flaticon.com/icons/png/512/61/61456.png"
      );

    cy.get("p").contains("Please tell us about yourself!");

    cy.get("img:last").should(
      "have.attr",
      "src",
      "https://image.flaticon.com/icons/png/512/61/61456.png"
    );
  });
});
