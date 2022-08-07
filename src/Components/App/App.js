
import '../App/App';
import Home from '../Home/Home';
import Results from "../Results/Results"
import QuizContainer from "../QuizContainer/QuizContainer"
import { Route } from "react-router-dom";
import { fetchQuestions } from "../../apiCalls"
import {useState, useEffect} from "react"

const App = () => {
  const [questionData, setQuestionData] = useState([])
  const [topField, setTopField] = useState("")

  useEffect(() => {
    fetchQuestions()
      .then(data => {
        setQuestionData(data.results)
      })
  }, [])

 const handleQuizResults = (result) => {
  setTopField(result)
 }
 
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/quiz">
        <QuizContainer questionData={questionData} handleQuizResults={handleQuizResults} />
      </Route>
      <Route exact path ="/generating-results">
        <Results topField={topField} />
      </Route>
      <Route exact path ="/results">
        {topField && <Results topField={topField} />}
      </Route>
      </div>
    );

}

 export default App;
