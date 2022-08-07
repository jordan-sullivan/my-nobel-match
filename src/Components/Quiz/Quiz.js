import './Quiz.css';
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import arrow from "../../images/arrow.png"


const Quiz = ({ questions, handleQuizResults}) => {
    const [counter, setCounter] = useState(1)
    const [results, setResults] = useState([])
    const [topField, setTopField] = useState("")
    const [isClicked, setIsClicked] = useState(false)
    
    
    const checkTrueCorrect = (event) => {
        event.preventDefault()
        setIsClicked(true)
        if(questions[counter].correct_answer === "True"){
            setResults(results => [...results, questions[counter].category])
        } 
    }

    const checkFalseCorrect = (event) => {
        event.preventDefault()
        setIsClicked(true)
        if(questions[counter].correct_answer === "False") {
            setResults(results => [...results, questions[counter].category])
        } 
    }

    const increaseCounter = () => {
        setCounter(counter +1)
        setIsClicked(false)
    }

    const calculateQuizResults = () => {
        if(!results){
            setResults([...results, "Peace"])
        }
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
        handleQuizResults(sortedSortable[0][0])
    }
    
    return(
        <div className="quizComponentDiv">     
        {questions.length ? ( <>
            {counter < 10 ? ( <>
        <div className="questionDiv">
            <h2 className="question">{questions[counter].question}</h2>
            <p className="questionCategory">{questions[counter].category}</p>
           <div className="buttonDiv">
                <button className="true" onClick={(event) => checkTrueCorrect(event)}>TRUE</button>
                <button className="false" onClick={(event) => checkFalseCorrect(event)}>FALSE</button>
            </div>
            <div className="bottomDiv">
                <p className="progress">{counter}/10</p>
                {isClicked &&
                <img onClick={increaseCounter} className="nextQuestionButton" src={arrow} alt="arrow pointing right to indicate next page"/>
                }
            </div>
        </div>
        </>) :
        <div className="questionDiv">
            <h2 className="question">{questions[counter].question}</h2>
            <p className="questionCategory">{questions[counter].category}</p>
            <div className="buttonDiv">
                <button className="true" onClick={(event) => checkTrueCorrect(event)}>TRUE</button>
                <button className="false" onClick={(event) => checkFalseCorrect(event)}>FALSE</button>
            </div>
            <div className="bottomDiv">
                <p className="progress">{counter}/10</p>
                {isClicked && 
                <Link to={`/results`}>
                <img onClick={calculateQuizResults} className="seeResultsButton" src={arrow} alt="arrow pointing right to indicate next page"/>
                </Link>}
            </div>
        </div>}
        </>)
        : null }
        </div>
)}

Quiz.propTypes = {
    questions: PropTypes.array
}

export default Quiz
