import React,{useState} from 'react';
import RedblackNumbers from './RedblackNumbers';


export default function Numberbet({numbersObj}){

    
    const [numbers,setNumbers] = useState(numbersObj)

    return(
    
            <div class="b firsts">
              {numbersObj.map((key,value)=>(
                console.log(key,value),
                <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
              ))  }
            </div>
        
    )
}