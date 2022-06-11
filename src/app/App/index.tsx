import { MemoryRouter } from 'react-router-dom';
import { ApiClientProvider } from 'src/api/ApiClientProvider';
import { AppRoutes } from 'src/app/routes/AppRoutes';
import { AppThemeProvider } from 'src/app/themes/AppThemeProvider';

export const App = () => (
  <MemoryRouter basename={import.meta.env.BASE_URL} initialEntries={[import.meta.env.BASE_URL]}>
    <AppThemeProvider>
      <ApiClientProvider>
        <AppRoutes />
      </ApiClientProvider>
    </AppThemeProvider>
  </MemoryRouter>
);
