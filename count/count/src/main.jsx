import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CounterUseState from './component/counterUseState.jsx';
import CounterUseReducer from './component/CounterUseReducer.jsx';
import CounterRedux from './component/CounterRedux.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterUseState /> */}
    {/* <CounterUseReducer /> */}
    {/* <CounterRedux /> */}
    <App />
  </StrictMode>,
);
