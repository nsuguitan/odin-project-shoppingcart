import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StrictMode} from 'react';


// 👇️ passed wrong ID to getElementById() method
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);


