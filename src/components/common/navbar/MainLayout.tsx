import React, { useEffect, useState } from 'react';
import MainSider from './MainSider';
import * as S from './MainLayout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { DesktopHeader } from './DesktopHeader';


const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(false);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  // const { isDesktop } = useResponsive();
  const location = useLocation();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  // useEffect(() => {
  //   setIsTwoColumnsLayout([MEDICAL_DASHBOARD_PATH, NFT_DASHBOARD_PATH].includes(location.pathname) && isDesktop);
  // }, [location.pathname, isDesktop]);

  return (
    <>
      <DesktopHeader isTwoColumnsLayout={isTwoColumnsLayout} />
      <S.LayoutMaster>
        <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
        <S.LayoutMain>
          {/* <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}> */}
          {/* <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} isTwoColumnsLayout={isTwoColumnsLayout} /> */}
          {/* </MainHeader> */}
          {/* <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}> */}
          <div id='Fullscreen'>
            <Outlet />
          </div>
          {/* {!isTwoColumnsLayout && <References />}
        </MainContent> */}
        </S.LayoutMain>
      </S.LayoutMaster>

    </>
  );
};

export default MainLayout;
