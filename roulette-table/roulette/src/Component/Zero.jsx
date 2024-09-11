import React,{useEffect,useState} from 'react';
export default function Zero({bets,
    setBets,loading}){

      const [content,setContent] =useState();
    function handleBets(event){
        try{
          setContent(event.target.textContent)
          if(bets[0].bets === null || bets[0].bets === undefined){
            setBets(() => [ {['bets']:content}])
            console.log(bets); 
          } 
        else if(bets !== null || bets !== undefined){
          setBets((prev) => [...prev, {['bets']:content}])
          console.log(bets); 
        }
        }catch(e){
          console.log(e);
        }
        
    }

    useEffect(()=>{
      
          if(bets[0].bets === null || bets[0].bets === undefined&&
            content !== undefined
          ){
            setBets(() => [ {['bets']:content}])
            console.log(bets); 
          } 
        
    },[bets.bets])
    return(
        loading && bets !== undefined && (
          <div  className="zerob">
      <span  onClick={(e)=>handleBets(e)} 
      id="zero" >0</span>
    </div>
        )
    )
}