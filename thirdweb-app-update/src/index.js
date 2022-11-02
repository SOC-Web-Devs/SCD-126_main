import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import "./styles/globals.css";
import 'primeicons/primeicons.css';
//import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/themes/lara-dark-purple/theme.css"
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import '/node_modules/primeflex/primeflex.css';
import { MoralisProvider } from "react-moralis";
// This is the chainId your dApp will work on.
const activeChainId = ChainId.BinanceSmartChainTestnet;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
   <Router>
    <MoralisProvider appId="zwQIBFniUzJsSepvQDceXi3XmHrrHzbhYqm7bB8x" serverUrl="https://ajoxa6uwwwar.usemoralis.com:2053/server">
      <App />
     </MoralisProvider>
     </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* <Router>
      <App />
    </Router> */
reportWebVitals();
