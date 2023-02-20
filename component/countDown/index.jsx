import { useEffect, useState, useRef, useContext} from "react";
import { DataContext } from "../../store/Globalstatus";
import actions from "../../store/Actions";
import "./countdown.css";

const Countdown = () => {
    const [countdown, setCountdown] = useState(3);
    const [status,dispatch] = useContext(DataContext);
    const [colorOfCounter, setColorOfCounter] = useState('');

    const timerId = useRef()

    useEffect(()=> {
         timerId.current = setInterval(() => {
            setCountdown(prev => prev -1);
            
            if(countdown <= 30 && countdown >=15){
                 setColorOfCounter('')
            } else if(countdown < 15 && countdown > 10){
                 setColorOfCounter("orangeColor")
            }  else {
                setColorOfCounter("redColor")
            }
         }, 1000);
          return ()=> clearInterval(timerId.current);
    },[countdown])

    useEffect(()=>{
        if(countdown <= 0){
    
            if(status.current+1 < status.questions.length)
            dispatch({type:actions.next_question, payload: {current: status.current+1,isNotFinal: true, userSelect:"" }});
            clearInterval(timerId.current);
            
            status.isNotFinal ? setCountdown(3) : setCountdown(0)

        }
            
    },[countdown])

    return (
        <p className={colorOfCounter}>{ (countdown < 10) ? "0"+countdown: countdown }</p>
    );
}
export default Countdown;