import { cn } from '@elestyle/utils'

import { useNetworkStatus } from '@/hooks/useNetworkStatus'

export function NetworkStatusBanner() {
  const { isOnline } = useNetworkStatus()

  if (isOnline) {
    return null
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-[999] px-4 py-2 text-center text-sm font-medium transition-all duration-300',
        'mx-2 mb-2 rounded-t-md shadow-md',
        {
          'bg-background/40 text-destructive-foreground': !isOnline,
        },
      )}
    >
      {isOnline ? '网络已恢复' : '网络不可用，请检查连接'}
    </div>
  )
}
