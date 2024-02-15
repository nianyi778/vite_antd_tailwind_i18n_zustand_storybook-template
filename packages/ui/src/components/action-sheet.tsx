import { BottomSheet } from './bottom-sheet'
import { Button } from './button'

interface ActionSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  actions: { label: string; onClick: () => void }[]
  cancelText?: string
  title?: string
  description?: string
}

export function ActionSheet({
  open,
  onOpenChange,
  actions,
  cancelText = '取消',
  title = '操作菜单',
  description = '请选择一个操作',
}: ActionSheetProps) {
  return (
    <BottomSheet open={open} onOpenChange={onOpenChange} title={title} description={description}>
      <div className="space-y-2">
        {actions.map((action, idx) => (
          <Button
            key={idx}
            variant="ghost"
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
          variant="outline"
          size="lg"
          className="w-full justify-center"
          onClick={() => onOpenChange(false)}
        >
          {cancelText}
        </Button>
      </div>
    </BottomSheet>
  )
}
