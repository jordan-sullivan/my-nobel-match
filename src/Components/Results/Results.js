// import { BrowserRouter } from "react-dom"
import './Results.css';
// import External from "../External/External"
import { fetchLaureates } from "../../apiCalls"
import { useState, useEffect } from "react"

const Results = () => {
    const [laureateData, setLaureateData] = useState([])

    useEffect(()=> {
        fetchLaureates()
        .then(data => {
        console.log("data", data.laureates)
        setLaureateData(data.laureates)
      })
    }, [])

    return(
        <div className="resultsComponentDiv">
            <div className="matchDetails">
                <h3 className="matchName">based on your results, you match with <span>Michael A. Spence</span></h3>
                <p className="matchCategory">Recipient of the YEAR Science and Nature Prize. </p>
                <p className="matchQuote">"for his work on fghdgghg kfh dfjghjdfgdhjfg jhsg dhjg  ghjkhjgd f jghd."</p>
            </div>
            <div className="studentDetails">
                <p className="correctCategories">You answered correct questions in the following categories: "Geography" , "Science and Nature"</p>
                <p className="correctCategories">It looks like we have found the next Nobel laureate in CATEGORY in You!</p>
                <p>one of 6 icons here </p>
                <button classNAme="retakeButton">Re-take quiz</button>
            </div>
        </div>
    )
}


export default Results