import { useState } from "react";
function CountButton():JSX.Element {
    const [count,setCount]=useState<number>(0);
    function countUp():void {
    setCount(count + 1);
    }
    return (
    <div>
    <h2>{count}</h2>
    <button onClick={countUp}>Click me</button>
    </div>
    );
   }
   export default CountButton;