import { configureStore } from '@reduxjs/toolkit';
import api from '../services/api';
import mainReducer from './mainSlice';
import cryptoReducer from './cryptoSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    main: mainReducer,
    crypto: cryptoReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
