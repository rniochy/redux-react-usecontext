import React from 'react';
import './answer.css';

const Answer = () => {
    return (
        <div className='answer-content content'>
             <section>
                <div className='answer-1 answer'>
                    <div>
                        <span className='a-1'><h4>A1</h4></span>
                        <span className='a-text-1'>Something Question Here</span>
                    </div>
                </div>
                <div className='answer-2 answer'>
                    <div>
                        <span className='a-text-2'>Something Question Here</span>
                        <span className='a-2'><h4>A2</h4></span>
                    </div>
                </div>
                <div className='answer-3 answer'>
                    <div>
                        <span className='a-3'><h4>A3</h4></span>
                        <span className='a-text-3'>Something Question Here</span>
                    </div>
                </div>
                <div className='answer-4 answer'>
                    <div>
                        <span className='a-text-4'>Something Question Here</span>
                        <span className='a-4'><h4>A4</h4></span>
                    </div>
                </div>
             </section>
        </div>
    );
}

export default Answer;
