import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';
import {Sale} from './pages/sale/Sale';
import {Cart} from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';
import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <ShopContextProvider>
        <Layout>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </ShopContextProvider>
    </Router>
  );
}

export default App;

