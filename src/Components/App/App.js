import medal from '../../images/medal.jpeg';
// import {BrowserRouter} from "react-dom"
import '../App/App';
import Results from "../Results/Results"
import QuizContainer from "../QuizContainer/QuizContainer"
import { fetchQuestions } from "../../apiCalls"
import {useState, useEffect} from "react"


const App = () => {
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    fetchQuestions()
      .then(data => {
        // console.log("data", data.results)
        setQuestionData(data.results)
      })
  }, [])

  return (
    <div className="App">
        WOW!!!!!!
       <QuizContainer questionData={questionData} />
        {/* <Home /> */}
        {/* <Quiz questionData={questionData}/> */}
        {/* <img src={medal} className="App-logo" alt="logo" /> */}
        <Results/>
      </div>
    );

}

 export default App;
