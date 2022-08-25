import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { FavoritesPage } from '../pages/FavoritesPage';
import { NewsPage } from '../pages/NewsPage';

const RoutesComponent: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<NewsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};

export { RoutesComponent };
