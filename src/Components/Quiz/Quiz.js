// import { useState, useEffect } from "react";
import React from "react"
// import { BrowserRouter } from "react-dom"
// import './Quiz.css';
// import Results from "../Results/Results"
// import External from "../External/External"

const Quiz = () => {

    return(
        <div className="quizComponentDiv">
            <img className="backArrow" alt="arrow pointing left to indicate a return to the previous page" src=""/>
            <img className="forwardArrow" alt="arrow pointing right to navigate to the next page" src="" />
            <div className="questionDiv">
                <h2 className="question">Question Here is this where?</h2>
                <button className="true">TRUE</button>
                <button className="false">FALSE</button>
                <p className="progress">8/10</p>
            </div>
        </div>
    )
}

export default Quiz