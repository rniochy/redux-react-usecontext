import actions from "./Actions";
import questions from '../data/data';

export const reducers  = (state, action)=>{
        const {current} = action.payload
        let { correctCount,wrongCount} = state;
        const current_ = current < 1 ? 1: current;
        const subtractToGetCurrent = 1;
        const {correctAnswer,incorrectAnswers } = questions[current_  - subtractToGetCurrent]

     console.log(correctAnswer,incorrectAnswers, state, action, questions[current + subtractToGetCurrent])

        // if(){
        //         console.log(" hhhhhhhhhhhhh ")
        // }

        
        
        if(incorrectAnswers.find((elem)=>elem == "1914")){
                correctCount++
                
        } else {
                wrongCount++
        }
        
        switch(action.type){
                case actions.next_question:{
                        
            return  {
                ...state, wrongCount,correctCount, current, isNotFinal: action.payload.isNotFinal
                }
        }
        case actions.back_to_start: {
               return { 
                   ...state,questions, current:0, isNotFinal: true, correctCount:0,wrongCount:0
                }
        } 
        default: {

                return state;
        }

        }
}