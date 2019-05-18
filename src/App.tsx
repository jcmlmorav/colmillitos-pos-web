import React from 'react';
import logo from './logo.svg';

import { Button } from 'antd';

import './App.scss';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Primary</Button>
      </header>
    </div>
  );
}

export default App;