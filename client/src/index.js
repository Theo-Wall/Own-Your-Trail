import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // in order to route our website we use BrowserRouters around our <App /> & we imported it from "react-router-dom"
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

