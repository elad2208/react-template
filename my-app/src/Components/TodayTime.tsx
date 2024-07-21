import { useState } from 'react';
import Watch from "./Watch";
 function TodayTime():JSX.Element{
    const [today, setToday] = useState<number> (Date.now());
    function upTime():void {
        setToday(Date.now());
        }
        setInterval(upTime, 1000);
    return (
        <Watch miliseconds={today}/>
        );       
}
export default TodayTime;