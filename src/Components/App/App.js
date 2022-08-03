import medal from '../../images/medal.jpeg';
// import {useState, useEffect} from "react";
// import {BrowserRouter} from "react-dom"
import '../App/App';
// import Home from "../Home/Home"
// import Quiz from "../Quiz/Quiz"
// import Results from "../Results/Results"
// import ExternalPage from "../ExternalPage/ExternalPage"
import { fetchQuestions, fetchLaureates } from "../../apiCalls"
import {useState, useEffect} from "react"


const App = () => {

  const [laureateData, setLaureateData] = useState([])
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    fetchLaureates()
      .then(data => {
        console.log("data", data.laureates)
        setLaureateData(data.laureates)
      })
    fetchQuestions()
      .then(data => {
        console.log("data", data.results)
        setQuestionData(data.results)
      })
  }, [])

    return (
      <div className="App">
        Hi Jordan
        {/* <img src={medal} className="App-logo" alt="logo" /> */}
      </div>
    );

}

 export default App;
