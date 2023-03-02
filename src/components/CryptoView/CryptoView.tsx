import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { RootState } from '../../store/store';
import { cryptoAction } from '../../store/cryptoSlice';
import { formatToUsdPrice } from '../../utils/priceFormatter';
import { useGetTopTenQuery } from '../../services/cryptos';
import CryptoFullscreen from '../CryptoFullscreen/CryptoFullscreen';
import './CryptoView.css';

const CryptoView: React.FC = () => {
  const dispatch = useDispatch();
  const mainState = useSelector((state: RootState) => state.main);
  const cryptoState = useSelector((state: RootState) => state.crypto);

  let { data: cryptoRows = [] } = useGetTopTenQuery();

  const params = useParams();
  const crypto = cryptoState.cryptos.find(crypto => crypto.id === params.id);

  useEffect(() => {
    if (cryptoState.cryptos.length === 0 && cryptoRows.length > 0) {
      dispatch(cryptoAction.setCryptos(cryptoRows));
      dispatch(cryptoAction.setIsLoaded(true));
    }
  }, [cryptoState, dispatch, cryptoRows]);

  let template = null;

  if (crypto) {
    let content = 
      <>
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
      </>;

    if (mainState.isFullscreen) {
      template = 
        <div className="crypto-view-page crypto-view-fullscreen">
          { content }
        </div>;
    } else {
      template = 
        <>
          <div className="crypto-view-page crypto-view">
            { content }
          </div>
          <CryptoFullscreen />
        </>;
    }
  }
  return (template);
}

export default CryptoView;
