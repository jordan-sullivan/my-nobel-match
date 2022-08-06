// import medal from '../../images/medal.jpeg';
import '../App/App';
import Results from "../Results/Results"
import QuizContainer from "../QuizContainer/QuizContainer"
// import ResultsContainer from "../ResultsContainer/ResultsContainer"
import { fetchQuestions } from "../../apiCalls"
import {useState, useEffect} from "react"
import { renderHook } from '@testing-library/react';


const App = () => {
  const [questionData, setQuestionData] = useState([])
  const [topField, setTopField] = useState("")

  //make method to update hook, pass down to Quiz to function[[0[0]]]

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
       <QuizContainer questionData={questionData} handleQuizResults={handleQuizResults}/>
        {/* <Home /> */}
        {/* <img src={medal} className="App-logo" alt="logo" /> */}
        <Results topField={topField} />
    
      </div>
    );

}

 export default App;
