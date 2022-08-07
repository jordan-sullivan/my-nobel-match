import './Results.css';
import { fetchLaureates } from "../../apiCalls"
import { useState, useEffect } from "react"
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom"

const Results = ({topField}) => {
    const [laureateData, setLaureateData] = useState([])
    const [matchedLaureate, setMatchedLaureate] = useState(null)

    useEffect(()=> {
        fetchLaureates()
        .then(data => {
        console.log("LaureatesData", data.laureates)
        setLaureateData(data.laureates)
      })
    }, [])
    
    const determineMatch = () => { 
        let matches =[]
            if (topField === "General Knowledge") {
                console.log("26")
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
    }
        // if(laureateData.length >1 && !matchedLaureate){
        //     console.log("LOOP?")
        //     determineMatch()
        // }

        return( 
            <Link to="/results">
        <>
        <button onClick={() => determineMatch()}>Button GO AWAYYYYYY</button>
        {matchedLaureate && 
            <div className="resultsComponentDiv">
            <div className="matchDetails">
                <h3 className="matchName">Based on your results, you match with <br/><span>{matchedLaureate.knownName.en}</span></h3>
                <p className="matchCategory">who earned {matchedLaureate.nobelPrizes[0].categoryFullName.en} in {matchedLaureate.nobelPrizes[0].awardYear} </p>
                <p className="matchQuote">{matchedLaureate.nobelPrizes[0].motivation.en}</p>
            </div>
            <div className="studentDetails">
                <p className="correctCategories">You answered correct questions in the following categories: "Geography" , "Science and Nature"</p>
                <p className="correctCategories">It looks like we have found the next Nobel laureate in {matchedLaureate.nobelPrizes[0].category.en} in You!</p>
                <p>ICON</p>
                <button className="retakeButton">Re-take quiz</button>
            </div>
            </div>
        } 
        </>
        </Link>)
}

Results.propTypes = {
    topField: PropTypes.string
}
    
export default Results