import { useState } from 'react';

import './QnA.css';

import arrow from '../../assets/images/icon-arrow.svg';

export const QnA = (props) => {
  const [activeQuestion, setActiveQuestion] = useState(false);

  const questionClickHandler = () => setActiveQuestion(!activeQuestion);
  return (
    <div className="qna__item">
      <div className="question-wrapper" onClick={questionClickHandler}>
        <h4 className="question">{props.question}</h4>
        <img src={arrow} alt="" />
      </div>
      <div className={activeQuestion ? 'answer-wrapper' : 'hidden'}>
        <p className="answer">{props.answer}</p>
      </div>
    </div>
  );
};
