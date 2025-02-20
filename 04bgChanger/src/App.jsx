import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color,setColor]=useState("olive")
  //function changeColor(color){
  //  setColor(color)
//}
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-amber-50 shadow-lg px-6 py-2 rounded-3xl">
                <button 
                onClick={()=> setColor('red')}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"red"}}>Red</button>
                <button 
                onClick={()=> setColor('blue')}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"Blue"}}>Blue</button>
                <button 
                onClick={()=> setColor('pink')}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"pink"}}>pink</button>
                <button 
                onClick={()=> setColor('green')}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"green"}}>Green</button>
                <button 
                onClick={()=> setColor('orange')}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"orange"}}>orange</button>
                <button 
                onClick={()=> setColor('yellow')}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"yellow"}}>yellow</button>
                <button 
                onClick={()=> setColor('purple')}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"purple"}}>purple</button>
                </div>  
      </div>
    </div>
  )
}

export default App
