import { useState } from 'react';

import './QnA.css';

import arrow from '../../assets/images/icon-arrow.svg';

export const QnA = (props) => {
  const [activeQuestion, setActiveQuestion] = useState(false);

  const questionClickHandler = () => setActiveQuestion(!activeQuestion);
  return (
    <>
      <dt className="question-wrapper" onClick={questionClickHandler}>
        <button className="question">{props.question}</button>
        <img src={arrow} alt="" />
      </dt>
      <dd className={activeQuestion ? 'answer-wrapper' : 'hidden'}>
        <p className="answer">{props.answer}</p>
      </dd>
    </>
  );
};
