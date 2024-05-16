import React from 'react';

import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProfilePage from './pages/profile/Profile'; 
import { Sale } from './pages/sale/Sale';
import { Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <Router>
      <ShopContextProvider>
        <Layout>       
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/profile" element={<ProfilePage />} /> 
          </Routes>
        </Layout>
      </ShopContextProvider>
    </Router>
  );
}

export default App;

