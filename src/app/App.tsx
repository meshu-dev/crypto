import './App.css';
import Layout from '../components/Layout/Layout';
import Test from '../components/Test/Test';
import CryptoList from '../components/CryptoList/CryptoList';

function App() {
  return (
    <div className="App">
      <Layout>
        <Test name="aaa" />
        <CryptoList />
      </Layout>
    </div>
  );
}

export default App;
