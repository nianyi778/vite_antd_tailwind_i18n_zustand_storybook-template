import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/layout/root-layout'
import NotFound from '@/pages/not-found'

// 使用 React.lazy 动态引入页面组件
const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))
const Setting = lazy(() => import('@/pages/setting'))
const Debug = lazy(() => import('@/pages/debug'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'debug',
        element: <Debug />,
      },
      {
        path: 'setting',
        element: <Setting />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
