import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { socket, addCoinsEvent, addOffActions } from '../utils/socket';
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import CryptoList from '../components/CryptoList/CryptoList';
import { RootState } from '../store/store';
import { cryptoAction } from '../store/cryptoSlice';
import './App.css';

function App() {
  const cryptoState = useSelector((state: RootState) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cryptoState.isLoaded === true && cryptoState.isSocketLoaded === false) {
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
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
