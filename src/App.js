import logo from './bbc.png';
import twitterLogo from './twitterLogo.png';
import telegramLogo from './telegramLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BBC on Solana
        </p>
        <a
          className="App-link"
          href="https://birdeye.so/token/?chain=solana"
          target="_blank"
          rel="noopener noreferrer"
          style={{pointerEvents: "none"}}
        >
          Trade BBC (Coming Soon!)
        </a>
        <div>
        <span>
        <a
          className="App-link"
          href="https://x.com/BIGBLACKCOCKSOL"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={twitterLogo} width={100} height={100} alt="logo" />
        </a>
        </span>
        <span>
        <a
          className="App-link"
          href="https://t.me/BigBlackCockOnSolana"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={telegramLogo} width={100} height={100} style={{marginLeft:"1rem"}} alt="logo" />
        </a>
        </span>
        </div>
      </header>
    </div>
  );
}

export default App;
