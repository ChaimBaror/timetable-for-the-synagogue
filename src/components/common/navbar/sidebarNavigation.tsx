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
import { ReactComponent as NftIcon } from '../../../assets/icons/nft-icon.svg';

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
    icon: <NftIcon />,
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
        url: '/apps/feed',
      },
      {
        title: 'kanban',
        key: 'kanban',
        url: '/apps/kanban',
      },
    ],
  },
];
