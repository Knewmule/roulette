import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zero from './Component/Zero';
import Twotoone from './Component/Numberbet/Twotoone';
import Colorbet from './Component/Numberbet/Colorbet';
import numbersObj from '../data/numbersobj.json'
import FirstNtwelve from './Component/Numberbet/FirstNtwelve';
import Numberbet from './Component/Numberbet/Numberbet'
import NewA from './Component/NewA';

const iteration =[0,1,2];
function App() {
  // const [interation,setInteration] = useState([0,1,2])
  return (
    <>
    <div id="table1">
    <Zero />
    {
      // Numberbets first Section
      }
    <NewA iteration={iteration[0]} />
    
    {/* Last Section */}
    <NewA iteration={iteration[1]} />
    <NewA iteration={iteration[2]} />

    
      <Twotoone /> 
    </div>
    
    
      
    </>
  )
}

export default App
