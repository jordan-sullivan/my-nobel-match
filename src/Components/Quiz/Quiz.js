// import { useState, useEffect } from "react";
import React from "react"
// import { BrowserRouter } from "react-dom"
import './Quiz.css';
// import Results from "../Results/Results"
// import External from "../External/External"

const Quiz = ({questionData}) => {
console.log("QuestionDATA", questionData);

    const getReducedQs = questionData.reduce((reducedQs, q) => {
        if ((q.category.includes("Animals")) && (!q.question.includes("&quot")) && (!q.question.includes("#"))) {
            reducedQs.push(q)
        } else if ((q.category.includes("Books")) && (!q.question.includes("&quot")) && (!q.question.includes("#"))) {
            reducedQs.push(q)
        } else if ((q.category.includes("Science")) && (!q.question.includes("&quot")) && (!q.question.includes("#"))) {
            reducedQs.push(q)
        } else if ((q.category.includes("General")) && (!q.question.includes("&quot")) && (!q.question.includes("#"))) {
            reducedQs.push(q)
        } else if ((q.category.includes("Geography")) && (!q.question.includes("&quot")) && (!q.question.includes("#"))) {
            reducedQs.push(q)
        }
    console.log("reducedQs", reducedQs)
    return (<Game key={reducedQs.question} category={reducedQs.category} question={reducedQs.question} answer={reducedQs.correct_answer}/>)
    
}, [])

    return(
        <div className="quizComponentDiv">
            {/* <img className="backArrow" alt="arrow pointing left to indicate a return to the previous page" src=""/>
            <img className="forwardArrow" alt="arrow pointing right to navigate to the next page" src="" /> */}
            <div className="questionDiv">
                <h2 className="question">{reducedQs.question}</h2>
                <button className="true">TRUE</button>
                <button className="false">FALSE</button>
                <p className="progress">8/10</p>
            </div>
        </div>
    )
}

export default Quiz