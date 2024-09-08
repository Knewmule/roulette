import React,{useState} from 'react';
import RedblackNumbers from './RedblackNumbers';


export default function Numberbet({numbersObj}){

    
    const [numbers,setNumbers] = useState(numbersObj)

    return(
    
            <div class="b firsts">
              {numbersObj.map(function(key,value){
                console.log(key,value)
                if(value <= 8 && value % 1 ){
                    
                        return <RedblackNumbers  color={numbersObj[value]} number={numbersObj[value+1]}/>
                    
                    
                }  else if(value > 8 && value <= 16 ){
                    console.log('1')
                    return <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                } else if(value > 16 && value <=24 ){
                    return <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                }})}
                
})  }
            </div>
        
    )
}