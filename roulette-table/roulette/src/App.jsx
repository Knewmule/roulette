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

function App() {

  return (
    <>
    <div id="table1">
    <Zero />
    {
      // Numberbets first Section
      }
    <NewA />
  {
    //<!-- Second Section Number bets  -->
    // Numberbets
  }
  <div class="a firsts">
    <div class="b firsts">
    <Numberbet num={32} numbersObj={numbersObj}/>
    </div>
    <div class="b firsts">
    <Numberbet num={40} numbersObj={numbersObj}/>
    </div>
    <div class="b firsts">
    <Numberbet num={48} numbersObj={numbersObj}/>
  </div>
  
  {
  //<!-- black or red part -->
  }
    <Colorbet />
  </div> 
  
     {
      // <!-- Third Number bets -->
      <div class="a firsts">
        <div class="b firsts">
        <Numberbet num={32} numbersObj={numbersObj}/>
        </div>
        <div class="b firsts">
        <Numberbet num={40} numbersObj={numbersObj}/>
        </div>
        <div class="b firsts">
        <Numberbet num={48} numbersObj={numbersObj}/>
        </div>
      
      {
      //<!-- last and twelve bets -->
      }
      <FirstNtwelve tweleve={"3rd Tweleve"}
      onebox={"ODD"}
      evenOdd={"19 TO 36"}
      />
    </div>   
     } 
      <Twotoone /> 
    </div>
    
    
      
    </>
  )
}

export default App
