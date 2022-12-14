import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Web3ReactProvider>

  </StrictMode>
)