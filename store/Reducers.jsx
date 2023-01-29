import actions from "./Actions";

export const reducers  = (state, action)=>{
     console.log(state, action)
        switch(action.type){
        case actions.next_question:{
                
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