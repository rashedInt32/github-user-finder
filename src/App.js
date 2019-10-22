import React from 'react';

import Routes from './routes/router';
import ModalContextProvider from './context/ModalContext';


import './App.css';

function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <Routes />
      </ModalContextProvider>
    </div>
  );
}

export default App;
