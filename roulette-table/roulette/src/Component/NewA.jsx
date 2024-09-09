import React,{useState} from 'react';
import Numberbet from './Numberbet/Numberbet';
import FirstNtwelve from './Numberbet/FirstNtwelve';
import numbersObj from '../../data/numbersobj.json'

export default function NewA(){

    const [num,setNum] = useState({
        row1:8,
        row2:16,
        row3:24
      });

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