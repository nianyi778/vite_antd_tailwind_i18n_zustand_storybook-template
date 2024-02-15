import React from 'react'

export function PullToRefresh({ onRefresh, children }: { onRefresh: () => Promise<void>; children: React.ReactNode }) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [pulling, setPulling] = React.useState(false)
    const [startY, setStartY] = React.useState<number | null>(null)
  
    const handleTouchStart = (e: TouchEvent) => {
      if (containerRef.current?.scrollTop === 0) {
        if (e.touches[0]) {
          setStartY(e.touches[0].clientY)
        }
      }
    }
  
    const handleTouchMove = (e: TouchEvent) => {
      if (startY !== null) {
        const distance = e.touches[0]?.clientY && startY !== null ? e.touches[0].clientY - startY : 0
        if (distance > 60) {
          setPulling(true)
        }
      }
    }
  
    const handleTouchEnd = async () => {
      if (pulling) {
        await onRefresh()
      }
      setStartY(null)
      setPulling(false)
    }
  
    React.useEffect(() => {
      const el = containerRef.current
      if (!el) return
      el.addEventListener('touchstart', handleTouchStart)
      el.addEventListener('touchmove', handleTouchMove)
      el.addEventListener('touchend', handleTouchEnd)
      return () => {
        el.removeEventListener('touchstart', handleTouchStart)
        el.removeEventListener('touchmove', handleTouchMove)
        el.removeEventListener('touchend', handleTouchEnd)
      }
    }, [pulling, startY])
  
    return (
      <div ref={containerRef} className="overflow-y-auto touch-auto min-h-[100vh]">
        {pulling && <div className="text-center text-sm py-2 text-muted-foreground">刷新中...</div>}
        {children}
      </div>
    )
  }
  