import './QuizContainer.css';
import React from "react"
import Quiz from "../Quiz/Quiz"
import PropTypes, { string } from "prop-types";


const QuizContainer = ({questionData, handleQuizResults}) => {

    const questions = questionData.reduce((reducedQs, q) => {
        if ((q.category.includes("Animals") ||  q.category.includes("Books") || 
            q.category.includes("Science") || q.category.includes("General") || q.category.includes("Geography")) && 
            (!q.question.includes("&quot") && !q.question.includes("#") && !q.question.includes("slug"))) {
            reducedQs.push(q)
        }
    return reducedQs
}, [])

return(
    <div className="containerComponentDiv">
        <Quiz questions={questions} handleQuizResults={handleQuizResults}/>
    </div>
    )
}

QuizContainer.propTypes = {
questionData: PropTypes.array,
handleQuizResults: PropTypes.string
}

export default QuizContainer