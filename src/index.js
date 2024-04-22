import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Account from './Account-page';
import Delivery from './Delivery-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Home/> */}
    <BrowserRouter>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/delivery" element={<Delivery />} />

      </Routes>
    </BrowserRouter>
  </>
);
