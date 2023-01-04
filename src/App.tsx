import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './page/MainPage';
import Login from './page/Login';
import SignUp from './page/SignUp';
import ProductDescPage from './page/ProductDescPage';
import Cart from './components/Cart';
import ScrollToTop from './components/function/ScrollToTop';
import ItemPage from './page/ItemPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fashion" element={<ItemPage category="fashion" />} />
          <Route
            path="/accessory"
            element={<ItemPage category="accessory" />}
          />
          <Route path="/digital" element={<ItemPage category="digital" />} />
          <Route path="/:productId" element={<ProductDescPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
