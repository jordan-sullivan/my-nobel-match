import './Results.css';
import { fetchLaureates } from "../../apiCalls"
import { useState, useEffect } from "react"
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom"

const Results = ({topField}) => {
    const [laureateData, setLaureateData] = useState([])
    const [matchedLaureate, setMatchedLaureate] = useState(null)
    const [isDetermined, setIsDetermined] = useState(false)

    useEffect(()=> {
        fetchLaureates()
        .then(data => {
        setLaureateData(data.laureates)
      })
    }, [])
    
    const determineMatch = () => { 
        let matches =[]
            if (topField === "General Knowledge") {
                matches = laureateData.filter(person => person.nobelPrizes[0].category.en === "Medicine" || person.nobelPrizes[0].category.en === "Chemistry")
                } else if (topField === "Science & Math" || "Science: Computers") {
                matches = laureateData.filter(person => person.nobelPrizes[0].category.en === "Economic Sciences" || person.nobelPrizes[0].category.en === "Physics")
                } else if (topField === "Entertainment: Books") {
                    matches = laureateData.filter(person => person.nobelPrizes[0].category.en === "Literature")
                } else {
                matches = laureateData.filter(person => person.nobelPrizes[0].category === "Peace" )
            }
           let shuffledMatches = matches
            .map(matches => ({ matches, randNum: Math.random() }))
            .sort((a, b) => a.randNum - b.randNum)
            .map(({ matches }) => matches)
            setMatchedLaureate(shuffledMatches[0])
            setIsDetermined(true)
    }

        return( 
            <>
            <Link to="/results">
        {!isDetermined && 
        <div className="determinedDiv">
            <button className="seeResults" onClick={() => determineMatch()} >see my results!</button>
        </div>}
        </Link>
        {matchedLaureate && isDetermined && 
            <div className="resultsComponentDiv">
            <div className="matchDetails">
                <h3 className="matchName">Based on your results, you match with <br/><span>{matchedLaureate.knownName.en}</span></h3>
                <p className="matchCategory">who earned {matchedLaureate.nobelPrizes[0].categoryFullName.en} in {matchedLaureate.nobelPrizes[0].awardYear} </p>
                <p className="matchQuote">"{matchedLaureate.nobelPrizes[0].motivation.en}"</p>
            </div>
            <div className="studentDetails">
                <p className="correctCategories">You answered the most questions correct in the {topField} category.</p>
                <p className="correctCategories">You could be the next Nobel laureate in {matchedLaureate.nobelPrizes[0].category.en}!</p>
                <p>Check out more information on {matchedLaureate.knownName.en} <a target="_blank" href={matchedLaureate.links[1].href} className="external-link">  HERE </a></p>
                <Link to="/quiz">
                    <button className="retakeButton">Re-take quiz</button>
                </Link>
            </div>
            </div>
        }
        </>)
}

Results.propTypes = {
    topField: PropTypes.string
}
    
export default Results