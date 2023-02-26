import React from "react";
import { Link } from 'react-router-dom';
import './CryptoBlock.css';
import { formatToUsdPrice } from '../../utils/priceFormatter';

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  image: string;
  rank: number;
}

export interface Props {
  crypto: Crypto;
}

const CryptoBlock: React.FC<Props> = ({ crypto }) => {
  return (
    <Link to={ `view/${crypto.id}` } className="crypto-block">
      <span className="crypto-block-rank">{ crypto.rank }</span>
      <img className="crypto-block-image" src={ crypto.image } alt={ `${crypto.name} icon` } />
      <div className="crypto-block-content">
        <div className="crypto-block-name">{ crypto.name }</div>
        <div className="crypto-block-price">{ formatToUsdPrice(crypto.price) }</div>
      </div>
    </Link>
  );
}

export default CryptoBlock;
