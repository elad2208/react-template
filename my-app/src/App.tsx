import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainComponent from './Components/MainComponent'
import TodayTime from './Components/TodayTime'

function App():JSX.Element {
  const [count, setCount] = useState(0)
  const myVar:string = 'Hello World!';
  const anotherVar:string = 'My Name is Elad';
  const myChildren:string[] = ['Omri', 'Kfir', 'Daniel', 'Michal'];
  const fathers:string[] = ['Avraham', 'Itzhak', 'Yaakov'];
  const listItems:JSX.Element[] = fathers.map((father, index) =>
    <li key={index}>
    {father}
    </li>
   );
   
  return (
    <>
      <TodayTime/>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <MainComponent/>
      
      <p>{myVar}</p>
      <p>{anotherVar}-{myVar}</p>
      <ul>{listItems}</ul>
      <p>{myChildren.map(child => <span> {child} </span>)}</p>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
