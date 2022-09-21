describe("adding ", () => {
  beforeEach("first", () => {
    cy.visit("http://localhost:3000/");
  });
  it("passes", () => {
    cy.get("#firstname").type("manikanta");
    cy.get("#lastname").type("katta");
    cy.get("#collegename").type("svkp");
    cy.get("#department").type("mechanical");
    cy.get("#Btn").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("are you sure want to add user data");
    });
    cy.get(".trow").last().should('contains.text','svkp')
    
  });

  it("empty firstname field", () => {
    cy.get("#Btn").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("enter your firstname");
    });
  });
  it("empty lastname field", () => {
    cy.get("#firstname").type("mani");
    cy.get("#Btn").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("enter your lastname");
    });
  });
  it("empty collegename field", () => {
    cy.get("#firstname").type("manikanta");
    cy.get("#lastname").type("katta");
    cy.get("#Btn").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("enter your collegename");
    });
  });
  it("empty department field", () => {
    cy.get("#firstname").type("manikanta");
    cy.get("#lastname").type("katta");
    cy.get("#collegename").type("svkp");
    cy.get("#Btn").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("enter your department");
    });
  });
  it("delete alert", () => {
    
     cy.get('.trow').last().contains('svkp')
     cy.get('.trow').last().get('#delete').click()
     cy.get('.trow').last().get('#delete').click()
     cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Are you sure want  to delete userdata");
     });
     cy.get(".trow").last().should('contains.text','svkp')
 
  });
  

});
