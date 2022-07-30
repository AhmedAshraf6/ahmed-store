import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// ReactDOM.render(<App />, document.getElementById('root'));
// import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './style.scss';
import 'bootstrap/dist/js/bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
