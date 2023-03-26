import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { mainAction } from '../../store/mainSlice';
import './CryptoFullscreen.css';

const CryptoFullscreen: React.FC = () => {
  const dispatch = useDispatch();
  const mainState = useSelector((state: RootState) => state.main);

  const buttonClick = () => {
    dispatch(mainAction.toggleFullscreen());

    if (mainState.isFullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  return (
    <div className="crypto-fullscreenbtn-wrapper">
      <button
        className="crypto-fullscreenbtn"
        onClick={ buttonClick }>
          { mainState.isFullscreen ? 'Exit fullscreen' : 'Fullscreen' }
      </button>
    </div>
  );
}

export default CryptoFullscreen;
