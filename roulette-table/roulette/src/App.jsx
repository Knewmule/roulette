import React,{ useState,useEffect } from 'react'
import './App.css'
import Zero from './Component/Zero';
import Twotoone from './Component/Twotoone';
import NewA from './Component/NewA';
import {useDispatch, useSelector} from 'react-redux';
import { betActions } from './store/bet-slice';
// const iteration =[0,1,2,3];
function App() {
  const dispatch = useDispatch()
  const bets = useSelector((state)=>state.bets)
  // const [bets,setBets] = useState([{bets:undefined}]);
  const [loading, setLoading] = useState(true);
  const [iteration,setIteration] = useState([0,1,2,3])
  const [content,setContent] =useState();
  function handleBets(event){
      try{
        
          // setBets(() => [ {['bets']:content}])
         
         if( bets !== undefined){
          console.log(bets);
          dispatch(betActions.placebet(content))  
         }else{
          console.log('undef')
          // dispatch(betActions.placebet(content));
         }
      
      }catch(e){
        console.log(e);
      }
  }

  useEffect(()=>{
        // if(bets.bets === null || bets.bets === undefined&&
        //   content !== undefined
        // ){
          dispatch(betActions.placebet(content))
          // console.log('useeffect '+bets.bets); 
        // } 
  },[bets])
  
  function handleIteration(){
    setLoading(false);
    setIteration([3])
  }
  return (
    <>
    <div  id="table1">
    {loading && bets  && <Zero bets={bets} 
    loading={loading} 
    content={content}
    handleBets={handleBets}
     />}
    {
      // Numberbets first Section
      loading && bets &&iteration.map((v)=>{
        if(v <=2){
          return ( <NewA id={iteration.id}iteration={v} 
            handleIteration={handleIteration}
            loading={loading}
            />)
        }
      })
      }
      { loading && bets &&
<Twotoone handleBets={handleBets} /> 
      }
    </div>
    </>
  )
}

export default App
