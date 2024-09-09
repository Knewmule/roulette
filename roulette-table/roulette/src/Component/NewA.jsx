import React,{useState,useEffect} from 'react';
import Numberbet from './Numberbet/Numberbet';
import FirstNtwelve from './Numberbet/FirstNtwelve';
import numbersObj from '../../data/numbersobj.json'
import Colorbet from './Numberbet/Colorbet';
export default function NewA({iteration}){

    const [num,setNum] = useState({});
    const [column,setColumn] = useState({
        tweleve:'1st Tweleve',
        onebox:'1 TO 18',
        evenOdd:'EVEN'
    });
    function rowsHandle(){
        if(iteration === 0){
            setColumn(()=>columnHandle());
            const first8 = {
                row1:8,row2:16,row3:24
            }
            return first8;
        }
        if(iteration === 1){
            const second8 = {
                row1:32,row2:40,row3:48
            }
            return second8;
        }
        if(iteration === 2){
            setColumn(()=>columnHandle());
            const third8 = {
                row1:56,row2:64,row3:72
            }
            return third8;
        }
        
    }
    function columnHandle(){
        if(iteration === 0){
            const col = {
                tweleve:'1st Tweleve',
                onebox:'1 TO 18',
                evenOdd:'EVEN'
            }
            
            return col;
        }
        if(iteration === 2){
            const col = {
                tweleve:'3rd Tweleve',
                onebox:'ODD',
                evenOdd:'19 TO 36'
            }
            return col;
        }
    }
    useEffect(()=>{
        setNum(rowsHandle);
    },[num])
    return(
    <div class="a firsts">
        <div class="b firsts">
            <Numberbet num={num.row1} numbersObj={numbersObj}/>
        </div>
        <div class="b firsts">
            <Numberbet num={num.row2} numbersObj={numbersObj}/>
        </div>
        <div class="b firsts">
            <Numberbet num={num.row3} numbersObj={numbersObj}/>
        </div>
      
      {
      //<!-- first and twelve bets -->
        iteration !== 1 ? <FirstNtwelve tweleve={column.tweleve}
        onebox={column.onebox}
        evenOdd={column.evenOdd}
        />:
        <Colorbet />
      }
      
    </div>   
    )
}