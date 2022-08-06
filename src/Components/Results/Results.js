import { fetchLaureates } from "../../apiCalls"
import { useState, useEffect } from "react"
import './Results.css';
import PropTypes from "prop-types";
import React from "react";

const Results = () => {
    const [laureateData, setLaureateData] = useState([])

    useEffect(()=> {
        fetchLaureates()
        .then(data => {
        console.log("LaureatesData", data.laureates)
        setLaureateData(data.laureates)
      })
    }, [])

     laureateData.map((laureate) => {
        return(
         <div className="resultsComponentDiv">
           {console.log(laureate.nobelPrizes[0].categoryFullName.en)}
            <div className="matchDetails">
                <h3 className="matchName">Based on your results, you match with <span>{laureate.knownName.en}</span></h3>
                <p className="matchCategory">who earned {laureate.nobelPrizes[0].categoryFullName.en} in {laureate.nobelPrizes[0].awardYear} </p>
                <p className="matchQuote">{laureate.nobelPrizes[0].motivation.en}</p>
            </div>
            <div className="studentDetails">
                <p className="correctCategories">You answered correct questions in the following categories: "Geography" , "Science and Nature"</p>
                <p className="correctCategories">It looks like we have found the next Nobel laureate in {laureate.nobelPrizes[0].category.en} in You!</p>
                <p>ICON</p>
                <button classNAme="retakeButton">Re-take quiz</button>
            </div>
        </div>
        )
    })
}

// Results.propTypes = {
//     laureateData: PropTypes.array
// }

export default Results