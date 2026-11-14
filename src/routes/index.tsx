import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import ProtectedRouteHoc from '@/hocs/ProtectedRouteHoc';
import AppLayout from '@/layouts/AppLayout';
import FallbackHoc from '@/hocs/FallbackHoc';

const HomePage = lazy(() => import('@/pages/home'));
const PrivacyPage = lazy(() => import('@/pages/privacy'));
const NotFoundPage = lazy(() => import('@/components/NotFoundApp'));

export default function Router() {
  const routes = [
    {
      path: '/',
      element: (
        <ProtectedRouteHoc>
          <AppLayout />
        </ProtectedRouteHoc>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/privacy',
          element: <PrivacyPage />,
        },
      ],
    },
    {
      path: '*',
      element: (
        <FallbackHoc>
          <NotFoundPage />
        </FallbackHoc>
      ),
    },
  ];

  const element = useRoutes(routes);

  return element;
}
