import * as React from 'react'

import { BottomSheet } from './bottom-sheet'
import { Button } from './button'

export interface ActionSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  actions: { label: string; onClick: () => void }[]
  cancelText?: string
  title?: string
  description?: string
}

export const ActionSheet = React.forwardRef<HTMLDivElement, ActionSheetProps>(
  (
    {
      open,
      onOpenChange,
      actions,
      cancelText = '取消',
      title = '操作菜单',
      description = '请选择一个操作',
      ...props
    },
    ref,
  ) => {
    return (
      <BottomSheet
        open={open}
        onOpenChange={onOpenChange}
        title={title}
        description={description}
        {...props}
      >
        <div className="space-y-2" ref={ref}>
          {actions.map((action, idx) => (
            <Button
              key={idx}
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                onOpenChange(false)
                action.onClick()
              }}
            >
              {action.label}
            </Button>
          ))}
          <Button
            size="lg"
            className="w-full justify-center"
            onClick={() => onOpenChange(false)}
          >
            {cancelText}
          </Button>
        </div>
      </BottomSheet>
    )
  },
)

ActionSheet.displayName = 'ActionSheet'
