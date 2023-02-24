import { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';
import { RootState } from '../store/store';
import { cryptoAction } from '../store/cryptoSlice';

// const apiUrl: string = process.env.REACT_APP_API_URL;

//const cryptoState = useSelector((state: RootState) => state.crypto);

export const socket: Socket = io(
  'http://127.0.0.1:3000/',
  {
    reconnectionDelay: 1000,
    reconnection: true,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
  }
);

export const addCoinsEvent = (dispatch: Dispatch<AnyAction>, socket: Socket): void => {
  socket.on('topTenCoins', (coins: Array<Crypto>) => {
    dispatch(cryptoAction.setCryptos(coins));
    console.log('SocketIO Call');
  });
}

export const addOffActions = (socket: Socket): void => {
  socket.off('connect');
  socket.off('disconnect');
  socket.close();
}
