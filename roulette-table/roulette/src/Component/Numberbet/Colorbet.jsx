import React from 'react';
export default function Colorbet({handleBets}){


    return(
        <>
        <div onClick={handleBets}class="ftb">
            2nd Tweleve
        </div>
        
        <div class="ftbbr red" > 
            RED
        </div>
        <div class="ftbbr black" > 
            BLACK
        </div>
        </>
    )
}