import React from 'react';
import './result.css'
const Result = () => {

    const handerClick = () =>{
         
    }
    return (
        <div className='result-content content'>
               <h1>RESULT ....</h1>

               <span onClick={handerClick}>Reset</span>
        </div>
    );
}

export default Result;