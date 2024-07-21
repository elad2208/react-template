import { useState } from 'react';
function ShowHover():JSX.Element {
 const [time, setTime] = useState<number>(0);
 function countHobver():void {
 setTime(time + 1);
 }
 return (
 <div>
 <h2 onMouseOver={countHobver}>{time}</h2>
 <p>you passed me again ;)</p>
 </div>
 );
}
export default ShowHover;
