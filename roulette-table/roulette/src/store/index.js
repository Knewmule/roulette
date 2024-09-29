import { configureStore } from '@reduxjs/toolkit';

import betslice from './bet-slice';

const store = configureStore({
  reducer: { bs: betslice.reducer },
});

export default store;
