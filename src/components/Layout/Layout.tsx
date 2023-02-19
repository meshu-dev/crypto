import './Layout.css';

export interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div id="layout">
      <header>
        <span id="logo">Top Ten Cryptos</span>
      </header>
      <main>
        { children }
      </main>
    </div>
  );
}

export default Layout;
