
import React from "react"
import './QuizContainer.css';
import Results from "../Results/Results"


const QuizContainer = ({questionData}) => {
// console.log("QuestionDATA", questionData);

    const getReducedQs = questionData.reduce((reducedQs, q, index) => {
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
    return reducedQs
}, [])

return(
    <div className="quizComponentDiv">
          <Game questions={getReducedQs}/>
            {/* <img className="backArrow" alt="arrow pointing left to indicate a return to the previous page" src=""/>
            <img className="forwardArrow" alt="arrow pointing right to navigate to the next page" src="" /> */}
            
        </div>
    )
}

export default Quiz