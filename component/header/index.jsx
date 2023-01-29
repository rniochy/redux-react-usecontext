import React from 'react';
import './header.css'
const Header = ({score}) => {
    const {left, remain} = score;
    return (
        <div className='header-content content'>
            <h2>Show what you know</h2>
            <p>Choose and select your answer below</p>
            <p>Question number {left} rest {remain - left} question</p>   
            <p>total: {remain}</p>
        </div>
    );
}
export default Header;