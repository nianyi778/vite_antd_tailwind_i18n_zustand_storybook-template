import { Outlet } from 'react-router'

import Debug from '@/components/Debug'
import { NetworkStatusBanner } from '@/components/NetworkStatusBanner'

export default function RootLayout() {
  return (
    <main className="h-screen w-screen">
      <Outlet />
      <NetworkStatusBanner />
      <div className="fixed bottom-0 right-0">
        <Debug />
      </div>
    </main>
  )
}
