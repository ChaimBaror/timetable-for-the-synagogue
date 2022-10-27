import React from 'react';
import { CompassOutlined, DashboardOutlined, FormOutlined, HomeOutlined, LayoutOutlined, LineChartOutlined, TableOutlined, UserOutlined, BlockOutlined, } from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  { title: 'dashboard', key: 'nft-dashboard', url: '/', icon: <FormOutlined />, },
  { title: 'medical-dashboard', key: 'medical-dashboard', url: '/dashboard', icon: <DashboardOutlined /> },
  {
    title: 'apps', key: 'apps', icon: <HomeOutlined />,
    children: [
      { title: 'feed', key: 'feed', url: '/' },
      { title: 'Hebcal', key: 'kanban', url: '/HebcalZmanim' },
      { title: 'dashboard', key: 'kanban', url: '/dashboard' },

    ],
  },
  {
    title: 'maps', key: 'maps', icon: <CompassOutlined />,
    children: [
      { title: 'googleMap', key: 'google-maps' },
      { title: 'leafletMap', key: 'leaflet-maps', },
      { title: 'reactSimpleMaps', key: 'react-simple-maps' },
      { title: 'pigeonMaps', key: 'pigeon-maps', },
    ],
  },
  {
    title: 'pages', key: 'pages', icon: <LayoutOutlined />,
    children: [
      { title: 'profilePage', key: 'profile', },
      { title: 'serverError', key: 'serverError' },
      { title: 'clientError', key: '404Error', url: '/404' },
    ],
  },
  { title: 'dataTables', key: 'dataTables', icon: <TableOutlined /> },
  { title: 'charts', key: 'charts', icon: <LineChartOutlined /> },
  { title: '.ui', key: 'ui', icon: <BlockOutlined /> },
];
