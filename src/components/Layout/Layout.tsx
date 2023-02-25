import './Layout.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  let location = useLocation();
  let homeLink = null;

  if (location.pathname !== '/') {
    homeLink = <Link to="/" className="header-link">Crypto List</Link>;
  }

  return (
    <>
      <header>
        <div id="header-content">
          <span id="logo">Live Crypto Prices</span>
          { homeLink }
        </div>
      </header>
      <main>
        { children }
      </main>
    </>
  );
}

export default Layout;
