import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    bets:['bets'],
    total:0,
    stack:100
  }
const betSlice = createSlice({
  name: 'bs',
  initialState:initialState,
  reducers: {
    placebet(state,action) {
        
        
        // if(state.bets.includes(action.payload)){
        //     state.bets.push(state.action.payload)
            // return({
            //     ...state,
            //     bets: [...state.bets, state.action.payload]
            // })
            // console.log(state.bets+action.payload)
        // }
        // else{
        //     state.bets.push(state.bets)
        // }


        if(state.bets !== NaN && 
            state.bets !== undefined && 
            action.payload !== undefined){
            
            state.bets.push(action.payload)
            console.log(state.bets+ action.payload)
        }else{
            // const is = action.payload;
            // if(is !== undefined && is !== NaN){
                state.bets.push('bets')
                console.log(state.bets+'else'+ action.payload)
            // }
            
        // }
    //    return ([...prev, {['bets']:content}])
    //   state.bet.push(action.payload.bet);
    }
  }
}});

export const betActions = betSlice.actions;

export default betSlice;

