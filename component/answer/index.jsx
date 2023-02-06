import React, {useContext} from 'react';
import './answer.css';
import { DataContext } from '../../store/Globalstatus';
import actions from '../../store/Actions';


const Answer = () => {
     const [status,dispatch] = useContext(DataContext);
     const Currentquestions= status.questions[status.current];
     const {correctAnswer, incorrectAnswers} = Currentquestions;
     const answers_ = [...incorrectAnswers, correctAnswer];

     const answers  = answers_.map((answer)=> ({sort: Math.random(), value: answer}))
                              .sort((a,b)=>a.sort - b.sort)
                              .map((obj)=>obj.value);

                              
     const onClickHandler = (e)=> {
         
          const userSelect = e.target.innerText
         if(status.current+1 < status.questions.length)
             return dispatch({type:actions.next_question, payload: {current: status.current+1,isNotFinal: true, userSelect }});
        
            return dispatch({type:actions.next_question, payload: {current: status.current, isNotFinal:false, userSelect }});             
    }
    return (
        <div className='answer-content content'>
             <section>
                  {answers.map((answer, index)=>
                      <Answer_ answers={answer} onClickHandler={onClickHandler} key={index} index={index}/>
                    )
                  }
             </section>
        </div>
    );
}

const Answer_ = ({answers,onClickHandler, index}) => {
     const index_ = index+1
     return (
     <div onClick={onClickHandler} className={`answer-${index_} answer`}>
            <span className={`a-${index_}`}><h4>{`A${index_}`}</h4></span>
            <span className={`a-text-${index_}`}><p>{answers}</p></span>
    </div>

    )    
}
export default Answer;
