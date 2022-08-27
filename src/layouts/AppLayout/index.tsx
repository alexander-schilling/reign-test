import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent';
import { NavbarComponent } from './components/NavbarComponent';

import './styles/AppLayoutStyle.css';

const AppLayout: FunctionComponent = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />

      <div className="content-container">
        <div className="content-center">
          <NavbarComponent />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export { AppLayout };
