import React from 'react';
import './question.css'

const Question = ({question}) => {
    return (
        <div className='question-content content'>
             <section>
                <div className='question-1 question'>
                    <div>
                        <span className='q-1'><h4>Q1</h4></span>
                        <span className='q-text-1'>Something Question Here</span>
                    </div>
                </div>
                <div className='question-2 question'>
                    <div>
                        <span className='q-text-1'>Something Question Here</span>
                        <span className='q-2'><h4>Q2</h4></span>
                    </div>
                </div>
                <div className='question-3 question' >
                    <div>
                        <span className='q-3'><h4>Q3</h4></span>
                        <span className='q-text-3'>Something Question Here</span>
                    </div>
                </div>
                <div className='question-4 question'>
                    <div>
                        <span className='q-text-4'>Something Question Here</span>
                        <span className='q-4'><h4>Q4</h4></span>
                    </div>
                </div>
             </section>
        </div>
    );
}

export default Question;