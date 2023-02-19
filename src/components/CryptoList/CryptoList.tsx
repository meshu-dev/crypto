import React from "react";
import { useSelector } from 'react-redux';
import CryptoBlock from '../CryptoBlock/CryptoBlock';
import { RootState } from '../../store/store';
import './CryptoList.css';

const CryptoList: React.FC = () => {
  const cryptoState = useSelector((state: RootState) => state.crypto);
  let cryptoBlocks: any = [];

  if (cryptoState.cryptos) {
    for (const crypto of cryptoState.cryptos) {
      cryptoBlocks.push(
        <CryptoBlock
          key={ crypto.id }
          crypto={ crypto } />
      );
    }
  }

  return (
    <div id="crypto-list">
      { cryptoBlocks }
    </div>
  );
}

export default CryptoList;
