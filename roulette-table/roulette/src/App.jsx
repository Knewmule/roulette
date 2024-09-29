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
        setContent(event.target.textContent)
        // if(bets.bets === null || bets.bets === undefined){
          // setBets(() => [ {['bets']:content}])
          // dispatch(betActions.placebet(content));
          console.log(bets); 
      //   } 
      // else{
        // setBets((prev) => [...prev, {['bets']:content}])
        dispatch(betActions.placebet((prev) => [...prev, {['bets']:content}]));
        console.log(bets); 
      // }
      }catch(e){
        console.log(e);
      }
  }

  // useEffect(()=>{
  //       if(bets.bets === null || bets.bets === undefined&&
  //         content !== undefined
  //       ){
  //         dispatch(betActions.placebet(() => [ {['bets']:content}]))
  //         console.log('useeffect '+bets); 
  //       } 
  // },[bets])
  
  function handleIteration(){
    setLoading(false);
    setIteration([3])
  }
  return (
    <>
    <div  id="table1">
    {loading && <Zero bets={bets} 
    loading={loading} 
    content={content}
    handleBets={handleBets}
     />}
    {
      // Numberbets first Section
      loading && iteration.map((v)=>{
        if(v <=2){
          return ( <NewA id={iteration.id}iteration={v} 
            handleIteration={handleIteration}
            loading={loading}
            />)
        }
      })
      }
      { loading && 
<Twotoone handleBets={handleBets} /> 
      }
    </div>
    </>
  )
}

export default App
