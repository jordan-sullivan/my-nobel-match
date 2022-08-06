// import medal from '../../images/medal.jpeg';
import '../App/App';
import Results from "../Results/Results"
import QuizContainer from "../QuizContainer/QuizContainer"
import { fetchQuestions } from "../../apiCalls"
import {useState, useEffect} from "react"

const App = () => {
  const [questionData, setQuestionData] = useState([])
  const [topField, setTopField] = useState("General Knowledge")

  useEffect(() => {
    fetchQuestions()
      .then(data => {
        setQuestionData(data.results)
      })
  }, [])

 const handleQuizResults = (result) => {
  setTopField(result)
 }
 console.log("TOP", topField);
 
  return (
    <div className="App">
       {!topField && <QuizContainer questionData={questionData} handleQuizResults={handleQuizResults} />}
        {/* <Home /> */}
        {/* <img src={medal} className="App-logo" alt="logo" /> */}
        {topField && <Results topField={topField} />}
      </div>
    );

}

 export default App;
