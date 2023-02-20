import { useEffect, useState, useRef } from "react";


const Countdown = () => {
    const [countdown, setCountdown] = useState(3)
    const timerId = useRef()

    useEffect(()=> {
         timerId.current = setInterval(() => {
            setCountdown(prev => prev -1);           
         }, 1000);
          return ()=> clearInterval(timerId.current);
    },[])

    useEffect(()=>{
        if(countdown <= 0)
        clearInterval(timerId.current);

    },[countdown])
    return (
        <p>  {countdown}  </p>
    );
}
export default Countdown;