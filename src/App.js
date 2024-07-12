import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Question from './components/Question';
import Result from './components/Result';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="App">
      <h1>Redux Questionnaire</h1>
      {questions.map((question) => (
        <Question key={question.id} questionId={question.id} />
      ))}
      <button onClick={handleSubmit}>Submit Answers</button>
      <Result />
    </div>
  );
}

export default App;