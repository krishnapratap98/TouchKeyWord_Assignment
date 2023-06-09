import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Typing } from './Pages/Typing';
import { NavBar } from './Pages/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 

  <BrowserRouter >   <NavBar />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/typing" element={<Typing />} />
    </Routes>
   
  </BrowserRouter>
  
  </>

);

reportWebVitals();
