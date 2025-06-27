import { cn } from '@elestyle/utils' // 若你已有 cn 工具
import { cva } from 'class-variance-authority'
import { useMemo } from 'react'

type Size = 'col2' | 'col3' | 'col3+'

const EquippingContentVariants = cva('grid h-full ', {
  variants: {
    size: {
      col2: 'grid-cols-2 text-base',
      col3: 'grid-cols-3 text-xs',
      'col3+': 'grid-cols-3 text-xs',
    },
  },
  defaultVariants: {
    size: 'col2',
  },
})

export default function EquippingContent() {
  const mockData = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `k${i + 1}`,
        status: '002-果子',
      })),
    [],
  )

  const size: Size = useMemo(() => {
    const count = mockData.length
    if (count <= 20) return 'col2'
    if (count <= 30) return 'col3'
    return 'col3+'
  }, [mockData.length])

  const visibleItems = useMemo(() => {
    if (size === 'col3+') {
      const head = mockData.slice(0, 15)
      const tail = mockData.slice(-12)
      return head
        .concat([
          { id: -1, name: '', status: '' },
          { id: 0, name: ' ⋮ ', status: '' },
          { id: -2, name: '', status: '' },
        ])
        .concat(tail)
    }
    return mockData
  }, [size, mockData])

  return (
    <div className="h-full overflow-hidden py-2">
      <div className={`${EquippingContentVariants({ size })} grid-rows-10`}>
        {visibleItems.map((item) => {
          const isEllipsis = item.id === 0

          return (
            <div
              key={item.id}
              className={cn('flex items-center justify-center font-semibold', {
                'text-lg font-bold': isEllipsis,
              })}
            >
              <span>{item.status}</span>
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
