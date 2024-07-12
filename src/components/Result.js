import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  return (
    <div>
      <h2>Results</h2>
      {result ? (
        <ul>
          {result.map((res) => (
            <li key={res.questionId}>
              Question {res.questionId}{res.answer}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results yet.</p>
      )}
    </div>
  );
};

export default Result;