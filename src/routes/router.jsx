import React, { lazy, Suspense } from 'react';

const Login = lazy(() => import('../pages/login'));

const router = [
  {
    path: '/login',
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
];

export default router;
