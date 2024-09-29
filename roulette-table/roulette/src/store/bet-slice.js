import { createSlice } from '@reduxjs/toolkit';

const betSlice = createSlice({
  name: 'bs',
  initialState: {
    bet: {bets:0},
    total:0,
    stack:100
  },
  reducers: {
    placebet(state, action) {
        console.log(action.payload)
    //   state.bet.push(action.payload.bet);
    },
  },
});

export const betActions = betSlice.actions;

export default betSlice;

