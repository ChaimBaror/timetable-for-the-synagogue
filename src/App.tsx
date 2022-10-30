import React from 'react';
import { AppRouter } from './router/AppRouter';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <ProSidebarProvider> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRouter />
      </BrowserRouter>
      {/* </ProSidebarProvider>; */}
    </>
  );
}

export default App;
