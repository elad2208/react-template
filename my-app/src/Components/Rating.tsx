import { useState,useEffect } from 'react';
import './../Rating.css';
function Rating():JSX.Element {
 const [count, setCount] = useState<number>(0);
 useEffect(():void => { console.log('re-rendered!'); });
 function increaseHandler():void {
 setCount(count + 1);
 }
 function decreaseHandler():void {
 setCount(count - 1);
 }
 function restartHandler():void {
 setCount(0);
 }
 return (
 <div>
 <button onClick={increaseHandler}>Increase</button>
 <button onClick={decreaseHandler}>Decrease</button>
 <button onClick={restartHandler}>Restart</button>
 <div>{count}</div>
 </div>
 );
}
export default Rating;