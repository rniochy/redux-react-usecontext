import React, {useContext} from 'react';
import './answer.css';
import { DataContext } from '../../store/Globalstatus';
import actions from '../../store/Actions';


const Answer = () => {
     const [status,dispatch] = useContext(DataContext);
     const Currentquestions= status.questions[status.current];
     const {correctAnswer, incorrectAnswers} = Currentquestions;
     const answers = [...incorrectAnswers, correctAnswer];
     const {question} = Currentquestions;

    const onClickHandler = ()=> {
       dispatch({type:actions.next_question, payload: {current: status.current+1 } })
    }
    return (
        <div className='answer-content content'>
             <section>
                  {answers.map((answer, index)=>
                      <QueAnswer_ answers={answer} onClickHandler={onClickHandler} key={index} index={index}/>)
                  }
             </section>
        </div>
    );
}

const QueAnswer_ = ({answers,onClickHandler, index}) => {
     const index_ = index+1
     return (
     <div onClick={onClickHandler} className={`answer-${index_} answer`}>
        <div>
            <span className={`a-${index_}`}><h4>A1</h4></span>
            <span className={`a-text-${index_}`}>{answers}</span>
        </div>
    </div>

    )    
}

export default Answer;
