
describe("Home & Quiz spec", () => {
  beforeEach(() => {
    cy.fixture("quizData.json").then((quizData) => {
      cy.intercept(
        "GET", 
        "https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean", 
        quizData
      );
      cy.visit("http://localhost:3000/").wait(1000)
    });
  });

  it("should be able to see title on page load as well as background image", () => {
    cy.get(".title").should("have.text", "My Nobel Match");
  });

  it("should be able to click the 'start' button to be routed to the quiz page to begin", () => {
    cy.get(".go").click().url("http://localhost:3000/quiz")
  })

  
  it("should be able to see one question, the question category, 2 buttons, and a progress counter only", () => {
    cy.visit("http://localhost:3000/quiz")
    cy.get(".question").should("exist");
    cy.get(".questionCategory").should("exist");
    cy.get(".true").should("exist");
    cy.get(".false").should("exist");
    cy.get(".progress").should("exist");
  });
  
  it("should show the arrow button only when the true or false button has been clicked", () => {
    cy.visit("http://localhost:3000/quiz")
    cy.get(".true").click()
    cy.get("img").should("exist")
  });
  
  it("should be able to click true or false, then click the arrow button to proceed through the 10 questions until routed to the 'See My Results' page", () => {
    cy.visit("http://localhost:3000/quiz")
    cy.get(".true").click().wait(4000)
    cy.get("img").click()
    cy.get(".false").click().wait(4000)
    cy.get("img").click()
    cy.get(".true").click()
    cy.get("img").click()
    cy.get(".true").click()
    cy.get("img").click()
    cy.get(".false").click()
    cy.get("img").click()
    cy.get(".true").click()
    cy.get("img").click()
    cy.get(".true").click()
    cy.get("img").click()
    cy.get(".true").click()
    cy.get("img").click()
    cy.get(".false").click()
    cy.get("img").click()
    cy.get(".true").click()
    cy.get(".seeResultsButton").click()
    cy.url("http://localhost:3000/results")
  });
      
      it("should return an error message if a network request fails to fetch quiz data", () => {
        cy.visit("http://localhost:3000/");
        cy.intercept(
          "GET",
          "https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean",
          {
            statusCode: 500,
            body: {
              error: " 500 Server Error",
            },
          }
          )
      });
});