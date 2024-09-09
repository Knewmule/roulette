import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zero from './Component/Zero';
import numbersObj from '../data/numbersobj.json'
import FirstNtwelve from './Component/Numberbet/FirstNtwelve';
import Numberbet from './Component/Numberbet/Numberbet'
function zero(){

  return(
    <div class="zerob">
      <span id="zero" >0</span>
    </div>
  );

}

function Numberbets(){

  return(
    <div class="a firsts">
      <Numberbet numbersObj={numbersObj}/>
      
      
      {
      //<!-- first and twelve bets -->
      }
      <FirstNtwelve />

  </div>   
  );
}

function Numberbets2(){

  return(
    <div class="a firsts">
         <div class="b firsts">
         <span class="black">15</span>
         <span class="red">18</span>
         <span class="black">21</span>
         <span class="red">24</span>
       </div>
         <div class="b firsts">
         <span class="red">14</span>
         <span class="black">17</span>
         <span class="red">20</span>
         <span class="black">23</span>
       </div>
         <div class="b firsts">
         <span class="black">13</span>
         <span class="red">16</span>
         <span class="black">19</span>
         <span class="red">22</span>
       </div>
        {
          // <!-- second and twelve bets -->
        }
   <div class="ftb">
       2nd Tweleve
     </div>
        
          <div class="ftbbr red" > 
        RED
        </div>
        <div class="ftbbr black" > 
        BLACK
        </div>
        
     </div>   
  );
}
function Numberbets3(){

  return(
    <div class="a firsts">
      <div class="b firsts">
      <span class="black">27</span>
      <span class="red">30</span>
      <span class="black">33</span>
      <span class="red">36</span>
    </div>
      <div class="b firsts">
      <span class="red">26</span>
      <span class="black">29</span>
      <span class="red">32</span>
      <span class="black">35</span>
    </div>
      <div class="b firsts">
      <span class="black">25</span>
      <span class="red">28</span>
      <span class="black">31</span>
      <span class="red">34</span>
    </div>
     {
      //<!-- Third and twelve bets -->
     }
<div class="ftb">
    3rd Tweleve
  </div>
     <div class="ftbb" > 
     ODD
       <div class="ftbb" > 
     19 to 36
     </div>
     </div>
     
  </div>
  )
}

function Twoto1(){

  return(
    <div class="bb ">
        <span class="twoone">2 to 1</span>
    
      <span class="twoone">2 to 1</span>
    
      <span class="twoone">2 to 1</span>
    </div>
  )
}

function App() {


  
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="table1">
        
    <Zero />
    {
      // Numberbets
      <div class="a firsts">
        <div class="b firsts">
        <Numberbet num={8} numbersObj={numbersObj}/>
        </div>
        <div class="b firsts">
        <Numberbet num={16} numbersObj={numbersObj}/>
        </div>
        <div class="b firsts">
        <Numberbet num={24} numbersObj={numbersObj}/>
        </div>
      
      {
      //<!-- first and twelve bets -->
      }
      <FirstNtwelve />

      </div>   
}
     

  {
    //<!-- Second Number bets  -->
    Numberbets2()
  }
      
      
        

     {
      // <!-- Third Number bets -->
      Numberbets3()
     }
   
  
    {
      //<!-- Two to One bets -->
      Twoto1()
    }
      
    </div>
      
    </>
  )
}

export default App
