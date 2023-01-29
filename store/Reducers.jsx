import actions from "./Actions";

export const reducers  = (state, action)=>{
     console.log(state, action)
        switch(action.type){
        case actions.next_question:{
                if((state.questions.length > state.current)) {
                        // state.isNotFinal = false;
                }
                
            return  {
                ...state, current: action.payload.current
                }
        }
        case actions.next_question: {
               return { 
                ...state, current: action.payload.current
                }
        }
        return state;

        }
}