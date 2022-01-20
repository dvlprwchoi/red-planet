import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const _changeTheme = () => {
    setIsDark(isDark ? false : true);
  };

  return (
    <div className="App" theme={isDark ? 'a' : 'b'}>
      <div className="Header">
        <h1>Red Planet</h1>
      </div>
      <div className="theme-button-div">
        <button className="theme-button" onClick={_changeTheme}>
          {isDark ? <div>&#9788;</div> : <div>&#9790;</div>}
        </button>
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
