import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Header from './header/Header';
const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Pages />
      </HashRouter>
    </div>
  );
};

export default App;
