import { createSlice } from '@reduxjs/toolkit';

export interface CryptoState {
  cryptos: Array<any>
}

const initialState: CryptoState = {
  cryptos: []
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialState,
  reducers: {
    setCryptos: (state, action) =>{
      state.cryptos = action.payload;
    }
  }
});

export const cryptoAction = cryptoSlice.actions;

export default cryptoSlice.reducer;
