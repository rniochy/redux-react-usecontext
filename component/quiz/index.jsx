import React, { useContext } from 'react';
import { DataContext } from '../../store/Globalstatus';
import Answer from '../answer';
import Header from '../header';
import Question from '../question';
import Result from '../result';
import './quiz.css';

const Quiz = () => {
    const [status] = useContext(DataContext);
    const Currentquestions= status.questions[status.current];

    const score = {left: status.current+1, remain:  status.questions.length}
    const {question} = Currentquestions;
    // const [isFinal] = 
    return (
        <div className='quiz-content'>
            <Header score={score}/>
          { (score.left < score.remain) ? 
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
