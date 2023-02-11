import React, { useState } from 'react';
import { useEffect } from 'react';
import './header.css'
const Header = ({score}) => {
    const {left, remain} = score;
    let [countDown, setCountDown] = useState(30)

    useEffect(()=>{
    })
    
    // setInterval(()=>{
    //  setCountDown(countDown -1)
    // }, 1000)

    const timeDecrement = () => {
        setInterval(()=>{
         setCountDown(countDown -1)
    }, 1000)
         
    }
    timeDecrement();

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