import {useState} from "react"
import './App.css';

function App() {
  const[counter,setCounter]=useState(15)
  //let counter=15
  const addValue=()=>{
    setCounter(counter+1)
    //console.log(counter)
  }
  const dltValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>React course with Aditya{counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <button
      onClick={dltValue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
