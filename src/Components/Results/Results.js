import { fetchLaureates } from "../../apiCalls"
import { useState, useEffect } from "react"
import './Results.css';
import PropTypes from "prop-types";
import React from "react";

const Results = ({topField}) => {
    const [laureateData, setLaureateData] = useState([])
    const [categoryLaureates, setCategoryLaureates] = useState([])
    const [matchedLaureate, setMatchedLaureate] = useState({})

    useEffect(()=> {
        fetchLaureates()
        .then(data => {
        console.log("LaureatesData", data.laureates)
        setLaureateData(data.laureates)
      })
      //if laureates category is "Science & Nature" === Medecine
           //filter the laureates with category.includes"Medecine"

    }, [])



    //  laureateData.map((laureate) => {
 
        return(
         <div className="resultsComponentDiv">
           {/* {console.log("LAUR", laureate.nobelPrizes[0].categoryFullName.en)}
            <div className="matchDetails">
                <h3 className="matchName">Based on your results, you match with <span>{laureate.knownName.en}</span></h3>
                <p className="matchCategory">who earned {laureate[matchedLaureate].nobelPrizes[0].categoryFullName.en} in {laureate.nobelPrizes[0].awardYear} </p>
                <p className="matchQuote">{laureate.nobelPrizes[0].motivation.en}</p>
            </div>
            <div className="studentDetails">
                <p className="correctCategories">You answered correct questions in the following categories: "Geography" , "Science and Nature"</p>
                <p className="correctCategories">It looks like we have found the next Nobel laureate in {laureate.nobelPrizes[0].category.en} in You!</p>
                <p>ICON</p>
                <button classNAme="retakeButton">Re-take quiz</button>
            </div> */}
        </div>
        )
    // })
}


export default Results