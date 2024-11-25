import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM  from 'react-dom/client';
import App from './App';
import "./index.css"
import "./App.css"
// Make sure this path is correct for your project structure
// Ensure that the element exists and is correctly typed as HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



