import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, BurgerCard, Menu, App, BatatasCard, RefrisCard, Cart, Compras } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Menu />
    <BurgerCard />
    <BatatasCard/>
    <RefrisCard />
    <Cart/>
    <Compras/>
    
    <App/>
  </React.StrictMode>
);

