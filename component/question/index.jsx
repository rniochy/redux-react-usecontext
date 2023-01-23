import React from 'react';
import './question.css'

const Question = ({question}) => {
    return (
        <div className='question-content content'>
            <div className='question'>
                <div>
                    <span className='q'><h4>Q</h4></span>
                    <span className='question-text'>Something Question Here</span>
                    <span className='q'><h4>?</h4></span>
                </div>
            </div>
        </div>
    );
}

export default Question;