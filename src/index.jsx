import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import App from './App';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <App />
  </React.StrictMode>
);


