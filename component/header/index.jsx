import React, { useState } from 'react';
import './header.css'
const Header = ({score}) => {
    const {left, remain} = score;
    const [countDown, setCountDown] = useState()

    let n = 30;
    const decrementTimer = () => {
             let timer = setInterval(()=>{
                if(n >= 0) {
                    n--;
                    console.log(n);
                } else {
                    return clearInterval(timer)
                } 
             },2000);           
    }


    decrementTimer();


    return (
     <>
        <div className='header-content content'>
            <div>
                <h2>Show what you know</h2>
                <p>Choose and select your answer below</p>
                <p>Question number {left} rest {remain - left} question</p>   
                <p>total: {remain}</p>
            </div>
            <div className='header-timer'>
                <span className='header-timer-number'>
                    <span>Left time</span>
                    <span>{countDown}</span>
                
                </span>
            </div>
        </div>
     </>
    );
}
export default Header;