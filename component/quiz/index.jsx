import React from 'react';
import Answer from '../answer';
import Question from '../question';
import Result from '../result';
import './quiz.css'

const Quiz = () => {
    return (
        <div className='quiz-content'>
          {true ? 
            <>
             <div> <Question/></div> 
             <div> <Answer/></div>
             </>   
          :
              <Result />
           }
        </div>
    );
}
export default Quiz;
