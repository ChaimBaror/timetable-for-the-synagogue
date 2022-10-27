import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
// import Overlay from '../../../../common/Overlay';
// import { useResponsive } from 'hooks/useResponsive';
import * as S from './MainSider.styles';
// import { SiderLogo } from '../SiderLogo';
import SiderMenu from './SiderMenu/SiderMenu';
import '../../../styles/NavbarHeader.scss'

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {

  return (
    <div className='Sider'>
      <S.Sider
        trigger={null}
        collapsed={ isCollapsed}
        collapsedWidth={true ? 80 : 0}
        collapsible={true}
        width={260}
        {...props}
      >
        {/* <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} /> */}
        <S.SiderContent  className='sideBar'>
          <SiderMenu  />
        </S.SiderContent>
      </S.Sider>
  
    </div>
  );
};

export default MainSider;
