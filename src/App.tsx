import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Home, Landing } from './pages';

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 5 * 60 * 1000,
  },
};

const queryClient = new QueryClient({ defaultOptions });

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
