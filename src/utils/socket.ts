import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { io, Socket } from 'socket.io-client';
import { cryptoAction } from '../store/crypto-slice';

export const socket = io(
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

export const addCoinsEvent = (dispatch: Dispatch<AnyAction>, socket: Socket) => {
  socket.on('coins', (coins: Array<Crypto>) => {
    coins = coins.slice(0, 10);
    console.log('COINS', coins);

    dispatch(cryptoAction.setCryptos(coins));   
  });
}

export const addOffActions = (socket: Socket) => {
  socket.off('connect');
  socket.off('disconnect');
}
