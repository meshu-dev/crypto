import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './main-slice';
import cryptoReducer from './crypto-slice';

const store = configureStore({
  reducer: {
    main: mainReducer,
    crypto: cryptoReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
