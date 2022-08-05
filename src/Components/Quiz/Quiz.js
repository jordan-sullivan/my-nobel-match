import React, { useState, useEffect } from "react"
import './Quiz.css';
import Results from "../Results/Results"


const Quiz = ({ questions }) => {
    const [counter, setCounter] = useState(1)
    const [results, setResults] = useState([])
    const [topField, setTopField] = useState("")
    
    
    const checkTrueCorrect = (event) => {
        event.preventDefault()
        if(questions[counter].correct_answer === "True"){
            setResults(results => [...results, questions[counter].category])
        } else {
            setResults(results => [...results, "incorrect"])
        }
    }

    const checkFalseCorrect = (event) => {
        event.preventDefault()
        if(questions[counter].correct_answer === "False") {
            setResults(results => [...results, questions[counter].category])
        } else {
            setResults(results => [...results, "incorrect"])
        }
    }

    const increaseCounter = () => {
        setCounter(counter +1)
    }

    const calculateQuizResults = () => {
        results.sort();
        let max_count = 1;
        let curr_count = 1;
        for (let i = 1; i < results.length; i++) {
            if ((results[i] !== "incorrect") && (results[i] == results[i - 1])) {
                    curr_count++;
                } else {
                    curr_count = 1;
                }
            if (curr_count > max_count) {
                    max_count = curr_count;
                    results[0] = results[i - 1];
                }
        }
        console.log("RES", results[0])
        return results[0];
    }
        
    useEffect(() => {
        console.log("TOP", topField)
        setTopField(results[0])
    })
    
    return(
        <div className="quizComponentDiv">     
        {questions.length ? ( <>
            {counter < 11 ? ( <>
        <div className="questionDiv">
            <h2 className="question">{questions[counter].question}</h2>
            <p className="questionCategory">{questions[counter].category}</p>
            <button className="true" onClick={(event) => checkTrueCorrect(event)}>TRUE</button>
            <button className="false" onClick={(event) => checkFalseCorrect(event)}>FALSE</button>
            <p className="progress">{counter}/10</p>
            <button className="nextQuestionButton" onClick={increaseCounter}>Next Question</button>
        </div>
        </>) : <button className="seeResultsButton" onClick={calculateQuizResults}>See My Results</button>}
        </>)
        : null }
        </div>
)}

export default Quiz
