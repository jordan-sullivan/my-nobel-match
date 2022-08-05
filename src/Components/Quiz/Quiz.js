import React, { useState, useEffect } from "react"
import './Quiz.css';
import Results from "../Results/Results"


const Quiz = ({ questions }) => {
    console.log("QUESTIONS", questions);
    const [counter, setCounter] = useState(0)
    const [selected, setSelected] = useState(true)
    const [results, setResults] = useState([])
    
    // onclick(() => {
    //     console.log("OnClick working")
    // })
    
    const checkCorrect = (event) => {
        event.preventDefault()
        console.log("checkCorrect working")
    //  When True or False selected, check against correct_answer and if correct, push that Qs category into array
    //setResults
    // increaseCounter()
}

const increaseCounter = () => {
    console.log("increaseCounter working")
    if(counter === 10) {

    }
    //  Add Next Question that will act as a submit Button and adds one to functionality to it to counter.
    setCounter(counter +1)
    //now go to next page
    //  If counter is at 10, render "See my results" page instead.(Results container ?) That will link to the results page.to display info.
}

    
    return(
        <div className="quizComponentDiv">     
    {questions.length ? ( <>
            {counter < 10 ? ( <>
        <div className="questionDiv">
            <h2 className="question">{questions[counter].question}</h2>
            <button className="true">TRUE</button>
            <button className="false">FALSE</button>
            <p className="progress">{counter}/10</p>
            <button className="nextQuestionButton" onClick={increaseCounter}>Next Question</button>
        </div>
        </>) : <button className="seeResultsButton">See My Results</button>}
    </>)
    : null }
        </div>
)}

export default Quiz
