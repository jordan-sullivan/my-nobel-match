import React, { useState, useEffect } from "react"
import './Quiz.css';
import Results from "../Results/Results"
import PropTypes from "prop-types";


const Quiz = ({ questions }) => {
    const [counter, setCounter] = useState(1)
    const [results, setResults] = useState([])
    const [topField, setTopField] = useState("")
    
    
    const checkTrueCorrect = (event) => {
        event.preventDefault()
        if(questions[counter].correct_answer === "True"){
            setResults(results => [...results, questions[counter].category])
        } 
    }

    const checkFalseCorrect = (event) => {
        event.preventDefault()
        if(questions[counter].correct_answer === "False") {
            setResults(results => [...results, questions[counter].category])
        } 
    }

    const increaseCounter = () => {
        setCounter(counter +1)
    }

    const calculateQuizResults = () => {
       const hashmap = results.reduce((obj, category) => {
            if(!obj[category]){
                obj[category] = 1
            } else {
                obj[category]++
            }
        return obj
        }, {})
        let sortable = []
        for(let key in hashmap){
            sortable.push([key, hashmap[key]])
        }
       const sortedSortable = sortable.sort((a, b) => {
          return  b[1] - a[1]
        })
        console.log("SORTED", sortedSortable[0][0])
        return sortedSortable[0][0]
    }
        
    useEffect(() => {
        console.log("TOP", topField)
        setTopField(results[0])
    })
    
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
        </>) :
        <div className="questionDiv">
            <h2 className="question">{questions[counter].question}</h2>
            <p className="questionCategory">{questions[counter].category}</p>
            <button className="true" onClick={(event) => checkTrueCorrect(event)}>TRUE</button>
            <button className="false" onClick={(event) => checkFalseCorrect(event)}>FALSE</button>
            <p className="progress">{counter}/10</p>
            <button className="seeResultsButton" onClick={calculateQuizResults}>See My Results</button>
        </div>}
        </>)
        : null }
        </div>
)}

Quiz.propTypes = {
    questions: PropTypes.array
}

export default Quiz
