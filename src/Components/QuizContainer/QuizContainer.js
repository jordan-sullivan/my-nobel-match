import React from "react"
import Quiz from "../Quiz/Quiz"
import './QuizContainer.css';
import PropTypes from "prop-types";


const QuizContainer = ({questionData}) => {

    const questions = questionData.reduce((reducedQs, q) => {
        if ((q.category.includes("Animals") ||  q.category.includes("Books") || 
            q.category.includes("Science") || q.category.includes("General") || q.category.includes("Geography")) && 
            (!q.question.includes("&quot") && !q.question.includes("#"))) {
            reducedQs.push(q)
        }
    return reducedQs
}, [])

return(
    <div className="containerComponentDiv">
        <Quiz questions={questions}/>
    </div>
    )
}

QuizContainer.propTypes = {
questionData: PropTypes.array
}

export default QuizContainer