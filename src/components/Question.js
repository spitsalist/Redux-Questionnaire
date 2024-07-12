import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';

const Question = ({ questionId }) => {
  const question = useSelector((state) => state.questionnaire.questions.find((q) => q.id === questionId));
  const dispatch = useDispatch();

  const handleAnswerChange = (answer) => {
    dispatch(answerQuestion({ questionId, answer }));
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={question.answer === option}
            onChange={() => handleAnswerChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;