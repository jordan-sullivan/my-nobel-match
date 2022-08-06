// import { fetchLaureates } from "../../apiCalls"
// import { useState, useEffect } from "react"
// import './ResultsContainer.css';
// import PropTypes, { array } from "prop-types";
// import Results from "../Results/Results";

// const ResultsContainer = () => {
//     const [laureateData, setLaureateData] = useState([])
//     // const [questions, setQuestions] = useState([])

//     useEffect(()=> {
//         fetchLaureates()
//         .then(data => {
//         console.log("LaureatesData", data.laureates)
//         setLaureateData(data.laureates)
//       })
//     }, [])

//        const laureate = laureateData.map((laureate) => {
//             return(
//         <div className="cardContainer">
//             <Results laureate={laureate} />
//         </div>
//             )
//             })

//         return (
//                 <div className="resultsContainerDiv">
//                     {laureate}
//                 </div>
//             )
// }

// // ResultsContainer.propTypes = {
// //     questions: PropTypes.array
// // }

// export default ResultsContainer
