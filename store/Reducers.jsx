import actions from "./Actions";
import questions from '../data/data';

export const reducers  = (state, action)=>{
  
     console.log(state, action)
        switch(action.type){
        case actions.next_question:{
                
            return  {
                  ...state, current: action.payload.current, isNotFinal: action.payload.isNotFinal
                }
        }
        case actions.next_question: {
                state.current = 0; state.isNotFinal = true;
               return { 
                   ...state, current: action.payload.current, isNotFinal: action.payload.isNotFinal
                }
        } 
        default: {
                return state;
        }

        }
}