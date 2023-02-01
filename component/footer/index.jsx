import React from 'react';
import { DataContext } from '../../store/Globalstatus';
import { useContext } from 'react';
import './footer.css';


const Footer = () => {
    const [status] = useContext(DataContext);
    const {wrongCount,correctCount} = status;
    
    return (
        <div className='footer-content content'>
            <section>
                <p className="footer-content-corret">Corret!</p>
                <p className="footer-content-wrong">Wrong!</p>
            </section>

            <div className="correc">
                <p>Correct count: {correctCount}</p> 
                <p className="wrong">Wrong! count: {wrongCount}</p>   
            </div>

             <div className="copyright">
                 <h6 className="name" id="name">
                      <span>Quiz</span>@ <span>Rodrigo Lima</span>
                   </h6>
             </div>
        </div>
    );
}

export default Footer;
