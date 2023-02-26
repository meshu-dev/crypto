import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CryptoBlock from '../CryptoBlock/CryptoBlock';
import { cryptoAction } from '../../store/cryptoSlice';
import { RootState } from '../../store/store';
import { useGetTopTenQuery } from '../../services/cryptos';
import './CryptoList.css';

const CryptoList: React.FC = () => {
  const dispatch = useDispatch();
  let { data: cryptoRows = [] } = useGetTopTenQuery();

  const cryptoState = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    if (cryptoState.cryptos.length === 0 && cryptoRows.length > 0) {
      dispatch(cryptoAction.setCryptos(cryptoRows));
      dispatch(cryptoAction.setIsLoaded(true));
    }
  }, [cryptoState, dispatch, cryptoRows]); 

  
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
