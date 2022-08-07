describe("Home & Quiz spec", () => {
  beforeEach(() => {
    cy.fixture("quizData.json").then((quizData) => {
      cy.intercept(
        "GET", 
        "https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean", 
        quizData
      );
      cy.visit("http://localhost:3001/").wait(1000)
    });
  });

  it("should be able to see title on page load as well as background image", () => {
    cy.get(".title").should("have.text", "My Nobel Match");
    // cy.get(".homeDiv").should("have.css","background-image: url(../../images/medal.jpeg)" )
  });

  it("should be able to click the 'start' button to be routed to the quiz page to begin", () => {
    cy.get(".go").click().url("http://localhost:3001/quiz")
  })

  it("should be able to see one question, the question category, 2 buttons, and a progress counter only", () => {
    cy.visit("http://localhost:3001/quiz")
    cy.get(".question").should("exist");
    cy.get(".questionCategory").should("exist");
    cy.get(".true").should("exist");
    cy.get(".false").should("exist");
    cy.get(".progress").should("exist");
  });

  it("should show the arrow button only when the true or false button has been clicked", () => {
    cy.visit("http://localhost:3001/quiz")
    cy.get(".true").click()
    cy.get("img").should("exist")
  });

  it("should be able to click true or false, then click the arrow button to proceed through the 10 questions until routed to the 'See My Results' page", () => {
    cy.visit("http://localhost:3001/quiz")
    cy.get(".true").click()
    cy.get("img").click()
      cy.get(".false").click()
      cy.get("img").click()
    // cy.get(".true").click()
    // cy.get("img").click()
    //   cy.get(".true").click()
    //   cy.get("img").click()
    // cy.get(".false").click()
    // cy.get("img").click()
    //   cy.get(".true").click()
    //   cy.get("img").click()
    // cy.get(".true").click()
    // cy.get("img").click()
    //   cy.get(".true").click()
    //   cy.get("img").click()
    // cy.get(".false").click()
    // cy.get("img").click()
    //   cy.get(".true").click()
    //   cy.get(".seeResultsButton").click()
    // cy.url("http://localhost:3001/results")
  });

  // it("should be able to get a new quiz each time you refresh the page", () => {
  //   cy.intercept(
  //     "GET",
  //     "https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean",
  //     { fixture: "quizData.json" }
  //   );
    cy.visit("http://localhost:3001/quiz")
    cy.get(".questionDiv").find(".question").contains("Brooklyn")
    cy.visit("http://localhost:3001/quiz")
    cy.get(".questionDiv").find(".question").contains("Brooklyn")
  //     .click();
  //   cy.get(".detail-drink-card").contains("Preparation");
  //   cy.contains("Ingredients");
  // });

  // it("should be able to use forward and back arrows to navigate between pages", () => {
  //   cy.fixture("mocktails.json").then((mocktails) => {
  //     cy.intercept(
  //       "GET",
  //       "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
  //       mocktails
  //     );
  //     cy.visit("http://localhost:3000/").wait(1000);
  //     cy.get(".random-container")
  //       .find(".drink-card")
  //       .contains("Brooklyn")
  //       .click()
  //       .url()
  //       .should("eq", "http://localhost:3000/drinks/178310")
  //       .go("back")
  //       .url()
  //       .should("eq", "http://localhost:3000/")
  //       .go("forward")
  //       .url()
  //       .should("eq", "http://localhost:3000/drinks/178310");
  //   });
  // });

  // it("should display 2 specialty cocktail categories filtered into: Amaretto drinks and Martini drinks", () => {
  //   cy.get(".amarettoButton").should("exist");
  //   cy.get(".martiniButton").should("exist");
  // });

  // it("should be able to click on the Amaretto drinks container and be routed to a new page", () => {
  //   cy.get(".amarettoButton").click();
  //   cy.get(".AmarettoContainer").should("have.length", 1);
  // });

  // it("should be able to click on the Martini drinks container and be routed to a new page", () => {
  //   cy.get(".martiniButton").click();
  //   cy.get(".martiniContainer").should("have.length", 1);
  // });

  // it("should return an error message if a network request fails to fetch random drinks", () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.intercept(
  //     "GET",
  //     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
  //     {
  //       statusCode: 404,
  //       body: {
  //         error: "Not Found",
  //       },
  //     }
  //   ).get(".errorMessage");
  //   cy.contains(
  //     "You didn't break the internet, but we can't find what you are looking for... Please try again later."
  //   );
  // });
});