import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsPage from './CardsPage';
import { NuevoContextProvider } from './NuevoContexto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NuevoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home titulo={5} />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
      </BrowserRouter>
    </NuevoContextProvider>
  </React.StrictMode>
);
