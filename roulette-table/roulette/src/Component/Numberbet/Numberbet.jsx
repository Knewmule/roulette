import React,{useState} from 'react';
import RedblackNumbers from './RedblackNumbers';


export default function Numberbet({numbersObj,
    num,
    firstHandler}){

    
    const [numbers,setNumbers] = useState(numbersObj)

    return(
    
            <>
              
              {numbersObj.map(function(key,value){
                console.log(key,value)
               if(firstHandler !== undefined && num === 0 && value < 8 && value % 2 === 0){
                        firstHandler(5);
                        return(
                                <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                        )
                }
            
            
                else if(num === 8 && value < 16 && value % 2 === 0){
                    return(
                        <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                    )
                }      
            })}       
                
              

            </>
        
    )
}