import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSider from '../components/common/navbar/MainSider';
import Error404Page from '../pages/Error404Page';
import FiveCellGrid from '../pages/FiveCellGrid';
import HomePage from '../pages/HomePage';
import SelectPlace from '../pages/SelectPlace';

// const Error404Page = React.lazy(() => import('../pages/Error404Page'));
// const HomePage = React.lazy(() => import('../pages/HomePage'));
// const SelectPlace = React.lazy(() => import('../pages/SelectPlace'));
// const FiveCellGrid = React.lazy(() => import('../pages/FiveCellGrid'));

// const Logout = React.lazy(() => import('./Logout'));

export const NFT_DASHBOARD_PATH = '/';


export const AppRouter: React.FC = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medical-dashboard" element={<FiveCellGrid />} />
        <Route path="/apps/feed" element={<SelectPlace />} />
        <Route path="/404" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};