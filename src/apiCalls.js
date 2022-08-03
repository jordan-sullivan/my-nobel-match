
export const fetchQuestions = () => {
  return fetch("https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean")
        .then(response => response.json())
}

export const fetchLaureates = () => {
    return fetch("https://api.nobelprize.org/2.1/laureates?")
    .then(response => response.json())
}