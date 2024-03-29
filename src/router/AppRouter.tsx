import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/common/navbar/MainLayout';
import Error404Page from '../pages/Error404Page';
import FiveCellGrid from '../pages/FiveCellGrid';
import FullBoard from '../pages/FullBoard';
import HomePage from '../pages/HomePage';
import LoopBord from '../pages/LoopBord';
import SelectPlace from '../pages/SelectPlace';
import RequireAuth from './RequireAuth';
import Schedule from '../pages/Schedule';

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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes >
        <Route path="/" element={protectedLayout}>
          <Route index element={< Schedule />} />
          <Route path="/dashboard" element={<FiveCellGrid />} />
          <Route path="/schedule" element={<FullBoard />} />
          <Route path="/LoopBord" element={<LoopBord />} />
          <Route path="/template" element={<HomePage />} />
          <Route path="/HebcalZmanim" element={<SelectPlace />} />
          <Route path="/404" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};