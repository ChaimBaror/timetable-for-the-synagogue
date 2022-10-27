import React from 'react';
import { AppRouter } from './router/AppRouter';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {

  return (
    <>
      <ProSidebarProvider>
        <AppRouter />
      </ProSidebarProvider>;

    </>
  );
}

export default App;
