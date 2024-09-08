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
               if(firstHandler || value || num !== undefined && num === 0 && value < 8 && value % 2 === 0){
                        
                        return(
                                <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                        )
                        firstHandler(8);
                }
            
            
                else if(firstHandler || value|| num !== undefined && num === 8 && value < 16 && value % 2 === 0){
                    firstHandler(16);
                    return(
                        <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                    )
                }      
                else if(firstHandler || value || num !== undefined && num === 16 && value < 24 && value % 2 === 0){
                    firstHandler(24);
                    return(
                        <RedblackNumbers  color={key} number={numbersObj[value+1]}/>
                    )
                }   
            })}       
                
              

            </>
        
    )
}