import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiClientProvider } from 'src/api/ApiClientProvider';
import { ApiKeyInputPage } from 'src/pages/ApiKeyInputPage';
import { RequireApiClient } from 'src/pages/App/RequireApiClient';
import { PrefecturePopulationPage } from 'src/pages/PrefecturePopulationPage';
import { route } from 'src/pages/routes';
import { AppThemeProvider } from 'src/themes/AppThemeProvider';

const AppRoutes = () => (
  <Routes>
    <Route
      path={route.mainPage}
      element={
        <RequireApiClient>
          <PrefecturePopulationPage />
        </RequireApiClient>
      }
    />
    <Route path={route.apiKeyInputPage} element={<ApiKeyInputPage />} />
  </Routes>
);

export const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AppThemeProvider>
      <ApiClientProvider>
        <AppRoutes />
      </ApiClientProvider>
    </AppThemeProvider>
  </BrowserRouter>
);
