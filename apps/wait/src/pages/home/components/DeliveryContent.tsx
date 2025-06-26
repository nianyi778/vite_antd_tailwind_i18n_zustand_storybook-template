import { cn } from '@elestyle/utils'
import { cva } from 'class-variance-authority'
import { useMemo } from 'react'

const DeliveryGridVariants = cva('grid gap-2', {
  variants: {
    theme: {
      obvious: 'grid-cols-4 grid-rows-4',
      grid: 'grid-cols-4 grid-rows-6',
    },
  },
  defaultVariants: {
    theme: 'obvious',
  },
})

export default function DeliveryContent({
  theme,
}: {
  theme: 'grid' | 'obvious'
}) {
  const mockData = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i + 1,
        name: `k${i + 1}`,
        status: '002',
      })),
    [],
  )

  const { headItem, restItems } = useMemo(() => {
    const limit = theme === 'obvious' ? 16 : 23
    const data = mockData.slice(0, limit)
    const shouldAddEllipsis = mockData.length > limit

    return theme === 'obvious'
      ? {
          headItem: mockData[0],
          restItems: data
            .slice(1)
            .concat(
              shouldAddEllipsis ? [{ id: -1, name: '...', status: '' }] : [],
            ),
        }
      : {
          headItem: null,
          restItems: data.concat(
            shouldAddEllipsis ? [{ id: -1, name: '...', status: '' }] : [],
          ),
        }
  }, [mockData, theme])

  return (
    <div className="flex h-full flex-col overflow-hidden px-4 py-4 pt-2 text-xl">
      {theme === 'obvious' && headItem && (
        <div className="bg-custom-active text-custom-active-foreground mb-2 flex h-1/3 items-center justify-center rounded-lg text-6xl font-bold">
          <span>{headItem.status}</span>
          <span>{headItem.name}</span>
        </div>
      )}

      <div className={cn(DeliveryGridVariants({ theme }), 'flex-1')}>
        {restItems.map((item) => (
          <div
            key={item.id}
            className="bg-custom-active text-custom-active-foreground flex items-center justify-center rounded-md font-semibold"
          >
            <span>{item.status}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
