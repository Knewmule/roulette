import React,{useState} from 'react';
import FirstNtwelve from './Numberbet/FirstNtwelve';
import Colorbet from './Numberbet/Colorbet';
import NumberbetContainer from './Numberbet/NumberbetContainer';
export default function NewA({
    iteration, 
    handleIteration,
    loading,
    handleBets
    }){
        const [column,setColumn] = useState({
            tweleve:'1st Tweleve',
            onebox:'1 TO 18',
            evenOdd:'EVEN'
        });

    return(
    <div class="a firsts">
        <NumberbetContainer 
        setColumn={setColumn}
        iteration={iteration} 
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