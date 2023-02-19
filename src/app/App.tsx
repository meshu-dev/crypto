import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { socket, addCoinsEvent, addOffActions } from '../utils/socket';
import Layout from '../components/Layout/Layout';
import CryptoList from '../components/CryptoList/CryptoList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    addCoinsEvent(dispatch, socket);

    return () => {
      addOffActions(socket);
    };
  }, []);

  return (
    <div className="App">
      <Layout>
        <CryptoList />
      </Layout>
    </div>
  );
}

export default App;
