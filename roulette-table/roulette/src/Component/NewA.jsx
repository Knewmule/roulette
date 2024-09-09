import React,{useState,useEffect} from 'react';
import Numberbet from './Numberbet/Numberbet';
import FirstNtwelve from './Numberbet/FirstNtwelve';
import numbersObj from '../../data/numbersobj.json'

export default function NewA({iteration}){

    const [num,setNum] = useState({});
    function rowsHandle(){
        if(iteration === 0){
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
            const second8 = {
                row1:56,row2:64,row3:72
            }
            return second8;
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
      }
      <FirstNtwelve tweleve={"1st Tweleve"}
      onebox={"1 TO 18"}
      evenOdd={"EVEN"}
      />
    </div>   
    )
}