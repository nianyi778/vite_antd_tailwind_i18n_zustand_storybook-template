import { Toast } from './toast'
import { useState } from 'react'

export default {
  title: 'UI/Toast',
  component: Toast
}

export const Example = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Show Toast</button>
      <Toast open={open} onOpenChange={setOpen} title="操作成功" />
    </>
  )
}