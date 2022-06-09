import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiClientProvider } from 'src/api/ApiClientProvider';
import { RequireApiClient } from 'src/app/App/RequireApiClient';
import { PageLayout } from 'src/app/PageLayout';
import { route } from 'src/app/routes';
import { ApiKeyInputPage } from 'src/pages/ApiKeyInputPage';
import { PrefecturePopulationPage } from 'src/pages/PrefecturePopulationPage';
import { AppThemeProvider } from 'src/themes/AppThemeProvider';

const AppRoutes = () => (
  <Routes>
    <Route
      path={route.mainPage}
      element={
        <RequireApiClient>
          <PageLayout>
            <PrefecturePopulationPage />
          </PageLayout>
        </RequireApiClient>
      }
    />
    <Route
      path={route.apiKeyInputPage}
      element={
        <PageLayout>
          <ApiKeyInputPage />
        </PageLayout>
      }
    />
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
