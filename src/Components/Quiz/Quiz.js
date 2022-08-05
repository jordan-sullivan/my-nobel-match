import React, { useState, useEffect } from "react"
import './Quiz.css';
import Results from "../Results/Results"


const Quiz = ({ questions }) => {
    console.log("QUESTIONS", questions);
    const [counter, setCounter] = useState(0)
    const [results, setResults] = useState([])

    
    return(
        <div className="quizComponentDiv">     
    {questions.length ? ( <>
        <div className="gameDiv">
            <h2 className="question">{questions[counter].question}</h2>
            <button className="true">TRUE</button>
            <button className="false">FALSE</button>
            <p className="progress">{counter}/{questions.length}</p>
        </div>
    </>)
    : null }
        </div>
)}

export default Quiz