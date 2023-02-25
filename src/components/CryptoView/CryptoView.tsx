import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { RootState } from '../../store/store';
import { formatToUsdPrice } from '../../utils/priceFormatter';
import './CryptoView.css';

const CryptoView: React.FC = () => {
  const params = useParams();
  const cryptoState = useSelector((state: RootState) => state.crypto);
  const crypto = cryptoState.cryptos.find(crypto => crypto.id == params.id);

  let template = null;

  if (crypto) {
    template = 
      <>
        <div className="crypto-view">
          <img className="crypto-view-image" src={ crypto.image } />
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
