import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './toggertheme/App.jsx';
import { store } from './toggertheme/store.jsx';
import './toggertheme/styles.css';
import React from "react";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
