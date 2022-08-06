import { fetchLaureates } from "../../apiCalls"
import { useState, useEffect } from "react"
import './Results.css';
import PropTypes from "prop-types";
import React from "react";

const Results = ({topField}) => {
    const [laureateData, setLaureateData] = useState([])
    const [matchedLaureate, setMatchedLaureate] = useState(null)

    // let matchedLaureate

    useEffect(()=> {
        fetchLaureates()
        .then(data => {
        console.log("LaureatesData", data.laureates)
        setLaureateData(data.laureates)
      })
    }, [])
    
    const determineMatch = () => { 
        let matches =[]
        // laureateData.forEach(laureate => {

            if (topField === "General Knowledge") {
                console.log("26")
                // matches.push(laureate.nobelPrizes[0].category === "Medicine" && laureate.nobelPrizes[0].category === "Chemistry")
                matches = laureateData.filter(person => person.nobelPrizes[0].category.en === "Peace" || person.nobelPrizes[0].category.en === "Chemistry")
            // } else if (topField === "Science & Math" || "Science: Computers") {
            //     matches.push(laureate.nobelPrizes[0].category === "Economic Sciences" && laureate.nobelPrizes[0].category === "Physics")
            // } else if (topField === "Entertainment: Books") {
            //     matches.push(laureate.nobelPrizes[0].category === "Literature" )
            } else {
                 console.log("34")
                matches = laureateData.filter(person => person.nobelPrizes[0].category === "Peace" )
           
        // })
            }
           let shuffledMatches = matches
            .map(matches => ({ matches, randNum: Math.random() }))
            .sort((a, b) => a.randNum - b.randNum)
            .map(({ matches }) => matches)
 
            console.log("Matches at 0", matches)
            setMatchedLaureate(shuffledMatches[0])
            // matchedLaureate = shuffledMatches[0]
    }
        // if(laureateData.length >1 && !matchedLaureate){
        //     console.log("LOOP?")
        //     determineMatch()
        // }

        return( 
        <>
        <button onClick={() => determineMatch()}>Hello worldd</button>
        {matchedLaureate && 
            <div className="resultsComponentDiv">
            <div className="matchDetails">
                <h3 className="matchName">Based on your results, you match with <span>{matchedLaureate.knownName.en}</span></h3>
                <p className="matchCategory">who earned {matchedLaureate.nobelPrizes[0].categoryFullName.en} in {matchedLaureate.nobelPrizes[0].awardYear} </p>
                <p className="matchQuote">{matchedLaureate.nobelPrizes[0].motivation.en}</p>
            </div>
            <div className="studentDetails">
                <p className="correctCategories">You answered correct questions in the following categories: "Geography" , "Science and Nature"</p>
                <p className="correctCategories">It looks like we have found the next Nobel laureate in {matchedLaureate.nobelPrizes[0].category.en} in You!</p>
                <p>ICON</p>
                <button classNAme="retakeButton">Re-take quiz</button>
            </div>
            </div>
        } 
        </>)  
}
    
    
export default Results