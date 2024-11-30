import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ApiContextProvider } from './Context/ApiContext.jsx';
import { CartContextProvider } from './Context/CartContext.jsx';
import { WishlistContextProvider } from './Context/WishlistContext.jsx';

createRoot(document.getElementById('root')).render(
  <WishlistContextProvider>
  <CartContextProvider>
  <ApiContextProvider>
    <App />
  </ApiContextProvider>
  </CartContextProvider>
  </WishlistContextProvider>
  
)
