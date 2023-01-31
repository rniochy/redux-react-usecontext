import React, { useContext } from 'react';
import { DataContext } from '../../store/Globalstatus';
import actions from '../../store/Actions';
import './result.css';


const Result = () => {
    const [status,dispatch] = useContext(DataContext);

    const onClickHandler = ()=> { 
            return dispatch({type:actions.back_to_start, payload: {current: 0,isNotFinal: true }});    
   }
    return (
        <div className='result-content content'>
               <h1>RESULT ....</h1>

               <span onClick={onClickHandler}>Reset</span>
        </div>
    );
}

export default Result;