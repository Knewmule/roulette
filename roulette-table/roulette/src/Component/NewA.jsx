import React,{useState,useEffect} from 'react';
import Numberbet from './Numberbet/Numberbet';
import FirstNtwelve from './Numberbet/FirstNtwelve';
import numbersObj from '../../data/numbersobj.json'
import Colorbet from './Numberbet/Colorbet';
import NumberbetContainer from './Numberbet/NumberbetContainer';
export default function NewA({
    iteration, 
    handleIteration,
    loading
    }){

    return(
    <div class="a firsts">
        <NumberbetContainer iteration={iteration} 
    handleIteration={handleIteration}
    loading={loading} />
        
      
      {
      //<!-- first and twelve bets -->
        loading && iteration <=2  && (iteration !== 1  
        ? <FirstNtwelve tweleve={column.tweleve}
        onebox={column.onebox}
        evenOdd={column.evenOdd}
        /> :
        <Colorbet />)
      }
      
    </div>   
    )
}