
export const fetchQuestions = () => {
  return fetch("https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean")
        .then(response => {
          if (response.ok) {
            return response.json()
          } else throw new Error("It looks like something went wrong. Please try again later.")
    }
)}

export const fetchLaureates = () => {
    return fetch("https://api.nobelprize.org/2.1/laureates?")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else throw new Error("It looks like something went wrong. Please try again later.")
    })
}
