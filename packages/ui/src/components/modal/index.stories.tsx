import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../button'
import { Modal } from './index'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>打开弹窗</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="欢迎"
          description="这是一个自定义 Modal 弹窗组件"
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                取消
              </Button>
              <Button onClick={() => setOpen(false)}>确认</Button>
            </div>
          }
        >
          <p className="text-sm text-muted-foreground">
            你可以在这里放任何内容，包括表单、文本、图片等。
          </p>
        </Modal>
      </>
    )
  },
}

export const Fullscreen: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>全屏弹窗</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="全屏模式"
          fullscreen
          footer={
            <div className="flex justify-end">
              <Button onClick={() => setOpen(false)}>关闭</Button>
            </div>
          }
        >
          <div className="h-[60vh] overflow-y-auto">
            <p className="text-sm">这里是全屏弹窗内容</p>
            <p>可滚动内容...</p>
          </div>
        </Modal>
      </>
    )
  },
}
