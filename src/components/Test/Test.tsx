import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
//import { cryptoAction } from '@/store/crypto-slice';
import { RootState } from '../../store/store';
import { cryptoAction } from '../../store/crypto-slice';

export interface Props {
  name: string;
}

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  image: string;
}

const socket = io(
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

export default ({ name }: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('coins', (coins: Array<Crypto>) => {
      
      coins = coins.slice(0, 10);
      console.log('COINS', coins);

      dispatch(cryptoAction.setCryptos(coins));   
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return (null);

  return (
    <div>
      <p>Connected: { '' + isConnected }</p>
    </div>
  );
}
