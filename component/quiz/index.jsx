import React from 'react';
import Answer from '../answer';
import Question from '../question';

const Quiz = () => {
    return (
        <div className='quiz-content content'>
            <Question/>
            <Answer/>
        </div>
    );
}
export default Quiz;
