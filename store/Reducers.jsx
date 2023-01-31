import actions from "./Actions";
import questions from '../data/data';

export const reducers  = (state, action)=>{
        const inicialState = {questions, current:0, isNotFinal: true};
     console.log(state, action)
        switch(action.type){
        case actions.next_question:{
                
            return  {
                ...state, current: action.payload.current, isNotFinal: action.payload.isNotFinal
                }
        }
        case actions.back_to_start: {
               return { 
                   ...state, questions, current:0, isNotFinal: true
                }
        } 
        default: {

                return state;
        }

        }
}