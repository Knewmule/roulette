import React,{useEffect,useState} from 'react';
export default function Zero({content,bets,
    setBets,loading,handleBets}){


    return(
        loading && bets !== undefined && (
          <div  className="zerob">
      <span  onClick={(e)=>handleBets(e)} 
      id="zero" >0</span>
    </div>
        )
    )
}