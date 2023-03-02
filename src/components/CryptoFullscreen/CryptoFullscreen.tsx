import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { mainAction } from '../../store/mainSlice';
import './CryptoFullscreen.css';

const CryptoFullscreen: React.FC = () => {
  const dispatch = useDispatch();
  const mainState = useSelector((state: RootState) => state.main);

  const buttonClick = () => {
    let fullScreenMode = mainState.isFullscreen === true ? false : true;
    dispatch(mainAction.toggleFullscreen(fullScreenMode));
  }

  return (
    <div className="crypto-fullscreenbtn-wrapper">
      <button
        className="crypto-fullscreenbtn"
        role="button"
        onClick={ buttonClick }>
          Fullscreen
      </button>
    </div>
  );
}

export default CryptoFullscreen;
