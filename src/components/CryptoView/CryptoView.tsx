import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { RootState } from '../../store/store';
import { cryptoAction } from '../../store/cryptoSlice';
import { formatToUsdPrice } from '../../utils/priceFormatter';
import { useGetTopTenQuery } from '../../services/cryptos';
import './CryptoView.css';

const CryptoView: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  let { data: cryptoRows = [] } = useGetTopTenQuery();
  const cryptoState = useSelector((state: RootState) => state.crypto);
  const crypto = cryptoState.cryptos.find(crypto => crypto.id === params.id);

  useEffect(() => {
    if (cryptoState.cryptos.length === 0 && cryptoRows.length > 0) {
      dispatch(cryptoAction.setCryptos(cryptoRows));
      dispatch(cryptoAction.setIsLoaded(true));
    }
  }, [cryptoState, dispatch, cryptoRows]);

  let template = null;

  if (crypto) {
    template = 
      <>
        <div className="crypto-view">
          <img className="crypto-view-image" src={ crypto.image } alt={ `${crypto.name} icon` } />
          <div className="crypto-view-content">
            <div className="crypto-view-top">
              <div className="crypto-view-name">{ crypto.name }</div>
              <div className="crypto-view-rankwrapper">
                <span className="crypto-view-rank">Rank #{ crypto.rank }</span>
              </div>
            </div>
            <div className="crypto-view-price">{ formatToUsdPrice(crypto.price) }</div>
          </div>
        </div>
      </>;
  }
  return (template);
}

export default CryptoView;
