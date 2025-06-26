import './index.css'
import './i18n'
import '@elestyle/ui/styles/shared-globals.css'

import { Loading } from '@elestyle/ui'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { ThemeProvider } from '@/layout/ThemeProvider'

import { router } from './routers/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </StrictMode>,
)
