import React from 'react';
import { AppRouter } from './router/AppRouter';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { HashRouter } from "react-router-dom";

function App() {

  return (
    <>
      {/* <ProSidebarProvider> */}
      <HashRouter basename="/">
        <AppRouter />
      </HashRouter >
      {/* </ProSidebarProvider>; */}
    </>
  );
}

export default App;
