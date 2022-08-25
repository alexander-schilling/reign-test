import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: FunctionComponent = () => {
  return <Outlet />;
};

export { AppLayout };
