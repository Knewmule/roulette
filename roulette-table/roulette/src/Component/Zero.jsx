import React from 'react';
export default function Zero({handleZero,loading}){

    return(
        loading && (
          <div  className="zerob">
      <span  onClick={handleZero} id="zero" >0</span>
    </div>
        )
    )
}