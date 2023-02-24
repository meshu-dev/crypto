import { createSlice } from '@reduxjs/toolkit';

export interface CryptoState {
  isLoaded: boolean,
  isSocketLoaded: boolean,
  cryptos: Array<any>
}

const initialState: CryptoState = {
  isLoaded: false,
  isSocketLoaded: false,
  cryptos: []
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialState,
  reducers: {
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
    setIsSocketLoaded: (state, action) => {
      state.isSocketLoaded = action.payload;
    },
    setCryptos: (state, action) => {
      state.cryptos = action.payload;
    }
  }
});

export const cryptoAction = cryptoSlice.actions;

export default cryptoSlice.reducer;
