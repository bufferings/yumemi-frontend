import { Route, Routes } from 'react-router-dom';
import { ApiKeyInputPage } from 'src/app/pages/ApiKeyInputPage';
import { PrefecturePopulationPage } from 'src/app/pages/PrefecturePopulationPage';
import { RequireApiClient } from 'src/app/routes/RequireApiClient';
import { route } from 'src/app/routes/routes';

export const AppRoutes = () => (
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
