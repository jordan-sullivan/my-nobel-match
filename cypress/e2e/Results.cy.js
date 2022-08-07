describe("Results spec", () => {
  beforeEach(() => {
    cy.fixture("quizData.json").then((quizData) => {
      cy.intercept(
        "GET", 
        "https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean", 
        quizData
      );
      cy.intercept(
        "GET", 
        "https://api.nobelprize.org/2.1/laureates?", 
        {
        response: 200,
        fixture: 'laureateData.json'
      }
      );
    });
  });

 it("should be able to click the 'start' button to be routed to the quiz page to begin", () => {
    cy.visit("http://localhost:3000")
    cy.get(".go").click().url("http://localhost:3000/quiz")
  })

it("should be able to click true or false, then click the arrow button to proceed through the 10 questions until routed to the 'See My Results' page", () => {
    cy.visit("http://localhost:3000/quiz")
    cy.get(".true").click()
    cy.get("img").click()
    cy.get(".false").click()
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

  it("should be able to see a button called See my results", () => {
    cy.get(".seeResults").should("have.text", "see my results!");
  });

  it("should be able to click the button to be see matched laureate results from quiz", () => {
    cy.get(".seeResults").click()
    cy.get(".seeResults").should("not.exist")
    cy.get(".resultsComponentDiv")
  })

  it("should be able to see who they matched with, and facts abut their quiz in relation to the category of laureate", () => {
    cy.get(".matchName").contains("A. Michael Spence")
    cy.get(".matchCategory").contains("Economic Sciences")
    cy.get(".matchQuote").contains("for their analyses of markets with asymmetric information")
  });
  
  it("should return an error message if a network request fails to fetch quiz data", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept(
      "GET",
      "https://api.nobelprize.org/2.1/laureates?",
      {
        statusCode: 500,
        body: {
          error: " 500 Server Error",
        },
        }
        )
  });
});