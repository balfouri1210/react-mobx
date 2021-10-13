import React from 'react';
import reactLogo from './logo.svg';
import mobxLogo from './mobx.png'
import './_style.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
      <header className="main-header">
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src={reactLogo} className="main-logo" alt="react" />
          <img src={mobxLogo} className="main-logo" alt="mobx" />
        </div>

        <p>
          <span style={{ color: '#61dafb' }}>React</span> + State management library <span style={{ color: '#e76416' }}>Mobx</span>
        </p>

        <Link className="main-link" to="/items">Item list</Link>
      </header>
    </div>
  );
}

export default Main;
