import { useState } from 'react';
function InputViewer():JSX.Element{
 const [text,setText] = useState<string>('');
 const [viewText, setViewText] = useState<string>('');
 function changeHandler(e:React.FormEvent<HTMLInputElement>):void 
 {
    setText(e.currentTarget.value);
     }
function clickHandler():void {
        setViewText(text);
        }
       
 return (
 <div>
<span>{viewText}</span>
 <input onChange={changeHandler} type="text" />
 <button onClick={clickHandler}>Click me</button>
 </div>
 );
}
export default InputViewer;
