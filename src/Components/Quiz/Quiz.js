import React, { useState, useEffect } from "react"
import './Quiz.css';
import Results from "../Results/Results"


const Quiz = ({ questions }) => {
    const [counter, setCounter] = useState(0)
    const [results, setResults] = useState([])
    
    
    const checkTrueCorrect = (event) => {
        event.preventDefault()
        if(questions[counter].correct_answer === "True"){
            setResults(results => [...results, questions[counter].category])
        } else {
            setResults(results => [...results, "incorrect"])
        }
    }

    const checkFalseCorrect = (event) => {
        if(questions[counter].correct_answer === "False") {
            setResults(results => [...results, questions[counter].category])
        } else {
            setResults(results => [...results, "incorrect"])
        }
    }

    const increaseCounter = () => {
        setCounter(counter +1)
    }

    
    return(
        <div className="quizComponentDiv">     
    {questions.length ? ( <>
            {counter < 10 ? ( <>
        <div className="questionDiv">
            <h2 className="question">{questions[counter].question}</h2>
            <p className="questionCategory">{questions[counter].category}</p>
            <button className="true" onClick={(event) => checkTrueCorrect(event)}>TRUE</button>
            <button className="false" onClick={(event) => checkFalseCorrect(event)}>FALSE</button>
            <p className="progress">{counter}/10</p>
            <button className="nextQuestionButton" onClick={increaseCounter}>Next Question</button>
        </div>
        </>) : <button className="seeResultsButton">See My Results</button>}
    </>)
    : null }
        </div>
)}

export default Quiz
