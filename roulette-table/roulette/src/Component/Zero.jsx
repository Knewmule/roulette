import React from 'react';
export default function Zero({bets,
    setBets,loading}){


    function handleBets(event){
        try{
          const content = event.target.textContent
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
    return(
        loading && (
          <div  className="zerob">
      <span  onClick={(e)=>handleBets(e)} 
      id="zero" >0</span>
    </div>
        )
    )
}