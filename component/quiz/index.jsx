import React from 'react';
import Answer from '../answer';
import Question from '../question';
import './quiz.css'
const Quiz = () => {
    return (
        <div className='quiz-content'>
          <div> <Question/></div> 
          <div> <Answer/></div>   
        </div>
    );
}
export default Quiz;
