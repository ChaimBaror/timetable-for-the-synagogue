import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/common/navbar/MainLayout';
import Error404Page from '../pages/Error404Page';
import FiveCellGrid from '../pages/FiveCellGrid';
import HomePage from '../pages/HomePage';
import SelectPlace from '../pages/SelectPlace';
import RequireAuth from './RequireAuth';

// const Error404Page = React.lazy(() => import('../pages/Error404Page'));
// const HomePage = React.lazy(() => import('../pages/HomePage'));
// const SelectPlace = React.lazy(() => import('../pages/SelectPlace'));
// const FiveCellGrid = React.lazy(() => import('../pages/FiveCellGrid'));

// const Logout = React.lazy(() => import('./Logout'));

export const NFT_DASHBOARD_PATH = '/';


export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>

  );

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={protectedLayout}>
          <Route index element={<HomePage />} />
          <Route path="/medical-dashboard" element={<FiveCellGrid />} />
          <Route path="/apps/feed" element={<SelectPlace />} />
          <Route path="/404" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};