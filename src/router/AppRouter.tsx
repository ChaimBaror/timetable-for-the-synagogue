import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Error404Page = React.lazy(() => import('../pages/Error404Page'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const SelectPlace = React.lazy(() => import('../pages/SelectPlace'));
const FiveCellGrid = React.lazy(() => import('../pages/FiveCellGrid'));

// const Logout = React.lazy(() => import('./Logout'));

export const NFT_DASHBOARD_PATH = '/';


export const AppRouter: React.FC = () => {
  return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FiveCellGrid" element={<FiveCellGrid />} />
          <Route path="/Exmple" element={<SelectPlace />} />
          <Route path="/404" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
  );
};