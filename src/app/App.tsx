import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createSocket, addCoinsEvent, addOffActions } from '../utils/socket';
import Layout from '../components/Layout/Layout';
import CryptoView from '../components/CryptoView/CryptoView';
import CryptoList from '../components/CryptoList/CryptoList';
import { RootState } from '../store/store';
import { cryptoAction } from '../store/cryptoSlice';
import './App.css';
import { Socket } from 'socket.io-client';

function App() {
  const cryptoState = useSelector((state: RootState) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cryptoState.isLoaded === true && cryptoState.isSocketLoaded === false) {
      const socket: Socket = createSocket();
      addCoinsEvent(dispatch, socket);
      dispatch(cryptoAction.setIsSocketLoaded(true));
  
      return () => {
        addOffActions(socket);
      };
    }
    return;
  }, [cryptoState.isLoaded]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/view/:id" element={<CryptoView />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
