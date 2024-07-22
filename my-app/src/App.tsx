import './App.css'
import Router from './Routes/Router'
import MainComponent from './Components/MainComponent'
import TodayTime from './Components/TodayTime'
import PropsComponent from './Components/PropsComponent'
import CountButton from './Components/CountButton'
import ShowHover from './Components/ShowHover'
import InputViewer from './Components/InputViewer'
import Rating from './Components/Rating'
import TableViewer from './Components/TableViewer'
import MyCard from './Components/Card'
import MyRouter from './Routes/MyRouter'
import MyMultiCard from './Components/MyMultiCard'


type userInfo = {
  name: string,
  prefix: string,
  age: number,
 };

 
function App():JSX.Element {
  const myVar:string = 'Hello World!';
  const anotherVar:string = 'My Name is Elad';
  const myChildren:string[] = ['Omri', 'Kfir', 'Daniel', 'Michal'];
  const fathers:string[] = ['Avraham', 'Itzhak', 'Yaakov'];
  const listItems:JSX.Element[] = fathers.map((father, index) =>
    <li key={index}>
    {father}
    </li>
   );
   const user: userInfo = {
    name: "Prosper Asayag",
    prefix: "Dr.",
    age: 20,
    }

   
  return (
    <>
      <TodayTime/>
      <MyMultiCard/>
      <MyRouter/>
      <MyCard/>
      
      <PropsComponent user={user}/>
      <MainComponent/>
      <InputViewer/>
      <p>{myVar}</p>
      <p>{anotherVar}-{myVar}</p>
      <ul>{listItems}</ul>
      <p>{myChildren.map(child => <span> {child} </span>)}</p>
      
      <CountButton/>
      <ShowHover/>
      
      <Rating/>
     <p><TableViewer/></p>
     <Router/>
     
    </>
  )
}

export default App
