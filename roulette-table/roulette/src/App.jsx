import React,{ useState } from 'react'
import './App.css'
import Zero from './Component/Zero';
import Twotoone from './Component/Twotoone';
import NewA from './Component/NewA';

// const iteration =[0,1,2,3];
function App() {
  const [bets,setBets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iteration,setIteration] = useState([0,1,2,3])
  function handleIteration(){
    setLoading(false);
    setIteration([3])
  }
  function handleBets(event){

      
        const content = event.target.textContent
      setBets(prev => [...prev, {['bets']:content}])
      console.log(bets);
      
    
  }
  
  return (
    <>
    <div  id="table1">
    {loading && <Zero loading={loading}
    handleZero={handleBets} />}
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
      {
        loading && <Twotoone /> 
      }
    
    
      
    </div>
    
    
      
    </>
  )
}

export default App
