import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    isLoading: true,
    statusMsg: null,
    isFullscreen: false
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
    setStatusMsg: (state, action) => {
      state.statusMsg = action.payload;
    },
    clearStatusMsg: (state) => {
      state.statusMsg = null;
    },
    toggleFullscreen: (state, action) => {
      state.isFullscreen = action.payload;
    }
  }
});

export const mainAction = mainSlice.actions;

export default mainSlice.reducer;
