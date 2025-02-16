import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowerRouter } from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowerRouter>
      <App />
    </BrowerRouter>
  </React.StrictMode>
);

reportWebVitals();
