import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';
import { cryptoAction } from '../store/cryptoSlice';

export const createSocket = (): Socket => {
  const url: string = process.env.REACT_APP_API_URL || '';

  if (url) {
    const socket: Socket = io(
      url,
      {
        reconnectionDelay: 1000,
        reconnection: true,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false
      }
    );
    return socket;
  } else {
    throw Error('SocketIO url unavailble');
  }
}

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
