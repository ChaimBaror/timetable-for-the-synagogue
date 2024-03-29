import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sidebarNavigation } from '../../../../router/sidebarNavigation';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Selectlocations from '../../Select/selectlocations';
import { EnvironmentOutlined } from '@ant-design/icons';


const SiderMenu: React.FC = () => {

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  useEffect(() => {
    collapseSidebar(true)
  }, [])

  return (
    <>
      <Sidebar>
        {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
        <Menu>
          <SubMenu
            key={"locations"}
            title={"locations"}
            icon={<EnvironmentOutlined />}
            label={"locations"}
          >
            <MenuItem title="locations" >
              <Selectlocations></Selectlocations>
            </MenuItem>
          </SubMenu>
          {sidebarNavigation.map((nav) =>
            nav.children && !!nav.children.length ? (
              <SubMenu
                key={nav.key}
                title={nav.title}
                icon={nav.icon}
                label={nav.title}
              >
                {nav.children.map((childNav) => (
                  <MenuItem key={childNav.key} title="">
                    <Link to={childNav.url || ''}>{childNav.title}</Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem key={nav.key} title="" icon={nav.icon}>
                <Link to={nav.url || ''}>{nav.title}</Link>
              </MenuItem>
            ))}
        </Menu>
      </Sidebar>
    </>
  );
};

export default SiderMenu;
