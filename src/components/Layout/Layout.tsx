import './Layout.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const mainState = useSelector((state: RootState) => state.main);

  let location = useLocation();
  let homeLink = null;

  if (location.pathname !== '/') {
    homeLink = <Link to="/" className="header-link">Crypto List</Link>;
  }

  let header = null;
  let mainClasses = '';

  if (mainState.isFullscreen === true) {
    mainClasses = 'main-fullscreen';
  } else {
    header = 
      <header>
        <div id="header-content">
          <span id="logo">Live Crypto Prices</span>
          { homeLink }
        </div>
      </header>;
  }

  return (
    <>
      { header }
      <main className={ mainClasses }>
        { children }
      </main>
    </>
  );
}

export default Layout;
