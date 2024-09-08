import React,{useState} from 'react';
import RedblackNumbers from './RedblackNumbers';


export default function Numberbet({numbersObj,num}){

    
    const [numbers,setNumbers] = useState(numbersObj)

    return(
    
            <>
              
              {numbersObj.map(function(key,value){
                console.log(key,value)
               if(num === 8 && value < 8 && value % 2 === 0){
                        return(
                                <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                        )
                }
            
            
                else if(num === 16 && value < 16 && value % 2 === 0){
                    return(
                        <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                    )
                }      
            })}       
                
              

            </>
        
    )
}