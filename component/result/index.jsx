import React, { useContext } from 'react';
import { DataContext } from '../../store/Globalstatus';
import actions from '../../store/Actions';
import './result.css';


const Result = () => {
    const [status,dispatch] = useContext(DataContext);

    const handerClick = () =>{
        return dispatch({type: actions.back_to_start});
    }
    return (
        <div className='result-content content'>
               <h1>RESULT ....</h1>

               <span onClick={handerClick}>Reset</span>
        </div>
    );
}

export default Result;