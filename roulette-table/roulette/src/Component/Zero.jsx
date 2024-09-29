import React,{useEffect,useState} from 'react';
export default function Zero({content,bets,
    loading,handleBets}){


    return(
      
          <div  className="zerob">
      <span  onClick={(e)=>handleBets(e)} 
      id="zero" >0</span>
    </div>
        
    )
}