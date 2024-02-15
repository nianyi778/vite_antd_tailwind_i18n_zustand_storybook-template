import { BottomSheet, Button } from '../index'
import { useState } from 'react'

export default {
  title: 'UI/BottomSheet',
  component: BottomSheet
}

export const Example = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>打开底部弹窗</Button>
      <BottomSheet open={open} onOpenChange={setOpen}>
        <p className="text-center text-sm">这是一个底部弹窗</p>
      </BottomSheet>
    </>
  )
}