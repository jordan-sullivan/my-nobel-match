// import medal from '../../images/medal.jpeg';
import '../App/App';
import Results from "../Results/Results"
import QuizContainer from "../QuizContainer/QuizContainer"
// import ResultsContainer from "../ResultsContainer/ResultsContainer"
import { fetchQuestions } from "../../apiCalls"
import {useState, useEffect} from "react"


const App = () => {
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    fetchQuestions()
      .then(data => {
        setQuestionData(data.results)
      })
  }, [])

  return (
    <div className="App">
       <QuizContainer questionData={questionData} />
        {/* <Home /> */}
        {/* <img src={medal} className="App-logo" alt="logo" /> */}
        <Results/>
    
      </div>
    );

}

 export default App;
