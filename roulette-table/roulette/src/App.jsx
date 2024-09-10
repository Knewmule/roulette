import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zero from './Component/Zero';
import Twotoone from './Component/Twotoone';
import Colorbet from './Component/Numberbet/Colorbet';
import numbersObj from '../data/numbersobj.json'
import FirstNtwelve from './Component/Numberbet/FirstNtwelve';
import Numberbet from './Component/Numberbet/Numberbet'
import NewA from './Component/NewA';

// const iteration =[0,1,2,3];
function App() {
  const [loading, setLoading] = useState(true);
  const [iteration,setIteration] = useState([0,1,2,3])
  function handleIteration(){
    setLoading(false);
    setIteration([3])
  }
  
  return (
    <>
    <div id="table1">
    <Zero />
    {
      // Numberbets first Section
      loading  && iteration.map((v)=>{
        if(v <=2){
          return ( <NewA id={iteration.id}iteration={v} 
            handleIteration={handleIteration}
            loading={loading}/>)
        }
      
      })
      }
    
    
      <Twotoone /> 
    </div>
    
    
      
    </>
  )
}

export default App
