import React from "react";
import './CryptoBlock.css';
import { formatToUsdPrice } from '../../utils/priceFormatter';
import { Crypto } from '../Test/Test';

export interface Props {
  crypto: Crypto;
}

const CryptoBlock: React.FC<Props> = ({ crypto }) => {
  return (
    <div className="crypto-block">
      <img className="crypto-block-image" src={ crypto.image } />
      <div className="crypto-block-content">
        <div>{ crypto.name }</div>
        <div>{ formatToUsdPrice(crypto.price) }</div>
      </div>
    </div>
  );
}

export default CryptoBlock;
