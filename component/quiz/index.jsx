import React, { useContext } from 'react';
import { DataContext } from '../../store/Globalstatus';
import Answer from '../answer';
import Question from '../question';
import Result from '../result';
import './quiz.css';

const Quiz = () => {
    const [status] = useContext(DataContext);
    const Currentquestions= status.questions[status.current];
    const {question} = Currentquestions;
    return (
        <div className='quiz-content'>
          {true ? 
            <>
             <div> <Question question={question}/></div> 
             <div> <Answer/></div>
             </>   
          :
              <Result />
           }
        </div>
    );
}
export default Quiz;
