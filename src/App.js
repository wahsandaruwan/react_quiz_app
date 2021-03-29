import './App.css';
import StartComp from './components/StartComp';
import QuestionComp from './components/QuestionComp';
import {useState, useEffect, useRef} from 'react';
import quizes from './quiz_data/quiz.json';

function App() {
  // UseStates
  const [count, setCount] = useState(1);
  const [activeQues, setActiveQues] = useState(0);
  const [ans, setAns] = useState([]);

  // Quiz start handler
  const quizStartHandler = () => {
    setCount(2);
  }

  return (
    <div className="App">
      {count === 1 && <StartComp onStartQuiz={quizStartHandler}/>}
      {count === 2 && <QuestionComp
        data = {quizes.data[activeQues]}
        onAnsUpdate = {setAns}
        numOfQues = {quizes.data.length}
        activeQues = {activeQues}
        onSetActiveQues = {setActiveQues}
        onSetCount = {setCount}
      />}
    </div>
  );
}

export default App;
