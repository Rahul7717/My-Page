import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import More1 from './More1';
import More2 from './More2';
import More3 from './More3';

const Layout = () => {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<More1 />} />
          <Route path="/More2" element={<More2 />} />
          <Route path="/More3" element={<More3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
