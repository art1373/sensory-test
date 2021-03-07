/* eslint-disable jest/valid-expect */
describe("visiti the page", () => {
  it("should go to the site", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should render the app", () => {
    const app = cy.get("#app");
    cy.visit("http://localhost:3000/");
    expect(app).to.exist;
  });
  it("should render the tiles", () => {
    const tile = cy.get("#tile");
    cy.visit("http://localhost:3000/");
    expect(tile).to.exist;
  });
});
describe("game logic", () => {
  it("should select a tile", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#tile").click();
    cy.get("#tile")
      .should("have.css", "background")
      .and(
        "eq",
        "rgb(240, 230, 140) none repeat scroll 0% 0% / auto padding-box border-box"
      );
  });
  it("should win", () => {
    cy.get("#wrapper > :nth-child(6)").click();
    cy.get("#wrapper > :nth-child(11)").click();
    cy.get("#wrapper > :nth-child(16)").click();
    cy.get("#wrapper > :nth-child(21)").click();
    const canvas = cy.get("#canvas");
    expect(canvas).to.exist;
  });
});
