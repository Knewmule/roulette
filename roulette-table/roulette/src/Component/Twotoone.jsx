import React from 'react';
export default function Twotoone({handleBets}){

    return(
       
      <div class="bb ">
        <span onClick={(e)=>handleBets(e)}class="twoone">2 to 1</span>
    
      <span class="twoone">2 to 1</span>
    
      <span class="twoone">2 to 1</span>
    </div>
    )
}