import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
} from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'dashboard',
    key: 'nft-dashboard',
    // TODO use path variable
    url: '/',
    icon: <FormOutlined />,
  },
  {
    title: 'medical-dashboard',
    key: 'medical-dashboard',
    url: '/medical-dashboard',
    icon: <DashboardOutlined />,
  },
  {
    title: 'apps',
    key: 'apps',
    icon: <HomeOutlined />,
    children: [
      {
        title: 'feed',
        key: 'feed',
      },
      {
        title: 'kanban',
        key: 'kanban',
      },
    ],
  },
  {
    title: 'common.dataTables',
    key: 'dataTables',
    icon: <TableOutlined />,
  },
  {
    title: 'common.charts',
    key: 'charts',
    icon: <LineChartOutlined />,
  },
  {
    title: 'common.ui',
    key: 'ui',
    icon: <BlockOutlined />,
  },
  {
    title: 'common.maps',
    key: 'maps',
    icon: <CompassOutlined />,
    children: [
      {
        title: 'common.googleMap',
        key: 'google-maps',
      },
      {
        title: 'common.leafletMap',
        key: 'leaflet-maps',
      },
      {
        title: 'common.reactSimpleMaps',
        key: 'react-simple-maps',
      },
      {
        title: 'common.pigeonMaps',
        key: 'pigeon-maps',
      },
    ],
  },
  {
    title: 'common.pages',
    key: 'pages',
    icon: <LayoutOutlined />,
    children: [
      {
        title: 'common.profilePage',
        key: 'profile',
      },
      {
        title: 'common.serverError',
        key: 'serverError',
      },
      {
        title: 'common.clientError',
        key: '404Error',
        url: '/404',
      },
    ],
  },
  
];
