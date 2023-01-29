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
        console.log(answers, question)
       dispatch({type:actions.next_question, payload: {current: status.current+1 } })
    }
    return (
        <div className='answer-content content'>
             <section>
             <div onClick={onClickHandler} className='answer-1 answer'>
        <div>
            <span className='a-1'><h4>A1</h4></span>
            <span className='a-text-1'>Something Question Here</span>
        </div>
    </div>

                <div className='answer-2 answer'>
                    <div>
                        <span className='a-text-2'>Something Question Here</span>
                        <span className='a-2'><h4>A2</h4></span>
                    </div>
                </div>
                <div className='answer-3 answer'>
                    <div>
                        <span className='a-3'><h4>A3</h4></span>
                        <span className='a-text-3'>Something Question Here</span>
                    </div>
                </div>
                <div className='answer-4 answer' >
                    <div>
                        <span className='a-text-4'>Something Question Here</span>
                        <span className='a-4'><h4>A4</h4></span>
                    </div>
                </div>
             </section>
        </div>
    );
}

const Question = () => {
     return <div onClick={onClickHandler} className='answer-1 answer'>
        <div>
            <span className='a-1'><h4>A1</h4></span>
            <span className='a-text-1'>Something Question Here</span>
        </div>
    </div>
}

export default Answer;
