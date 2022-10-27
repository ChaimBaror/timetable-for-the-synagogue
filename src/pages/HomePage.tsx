import React, { useState } from 'react'
import MainSider from '../components/common/navbar/MainSider';
import ScreenKosherZmanim from '../components/ScreenKosherZmanim'

const HomePage = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <div >
      <ScreenKosherZmanim />
    </div>
  )
}

export default HomePage;
