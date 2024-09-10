import React,{useState} from 'react';
import RedblackNumbers from './RedblackNumbers';


export default function Numberbet({numbersObj,num}){

    
    const [loading,setLoading] = useState(true)

    return(
    
            <>
              
              {           
                 numbersObj.map(function(key,value){
                    console.log(key,value)
                   if(num === 8 && value < 8 && value % 2 === 0){
                            return(
                                    <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                            )
                    }
                
                
                    if(num === 16 && value >=8 && value < 16 && value % 2 === 0){
                        return(
                            <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                        )
                    }      
    
                    if(num === 24 && value >=16 && value < 24 && value % 2 === 0){
                        return(
                            <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                        )
                    }     
                        // Middle Section
                    if(num === 32 && value >=24 && value < 32 && value % 2 === 0){
                        return(
                            <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                        )
                    }    
                    if(num === 40 && value >=32 && value < 40 && value % 2 === 0){
                        return(
                            <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                        )
                    }
                    if(num === 48 && value >=40 && value < 48 && value % 2 === 0){
                        return(
                            <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                        )
                    }
    
                        // Last Section
                        if(num === 56 && value >=48 && value < 56 && value % 2 === 0){
                            return(
                                <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                            )
                        }    
                        if(num === 64 && value >=56 && value < 64 && value % 2 === 0){
                            return(
                                <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                            )
                        }
                        if(num === 72 && value >=64 && value < 72 && value % 2 === 0){
                            
                            return(
                                <RedblackNumbers id={numbersObj.id} color={key} number={numbersObj[value+1]}/>
                            )
                        }   
                        
                        
            })
                    
                        
            }  
                   
                
              

            </>
        
    )
}