import { Icon } from '@elestyle/icons'
import { Button, Modal, Space, Typography } from '@elestyle/ui'
import { useState } from 'react'
import { Link } from 'react-router'

import { useTitle } from '@/hooks/useTitle'

export default function Setting() {
  useTitle('设置')
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-full flex-col p-4">
      <div className="w-24">
        <Link to={'/'}>
          <Button block variant="secondary">
            <Icon name="ChevronLeft"></Icon>
            <span>返回</span>
          </Button>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-2/4 flex-col">
          <Space direction="vertical" size={'middle'}>
            <Button variant="secondary">再読み込み</Button>
            <Button variant="secondary" onClick={() => setOpen(true)}>
              カスタム設定
            </Button>
            <Button variant="secondary">ログアウト</Button>
          </Space>
        </div>
      </div>
      <Space direction="vertical" size={0.5}>
        <Typography className="text-xs">
          {' '}
          App Version: 1.8.13(build364){' '}
        </Typography>
        <Typography className="text-xs">
          {' '}
          Device ID: 723e5022-170d-48d2-9e21-98a0d84f7a46{' '}
        </Typography>
        <Typography className="text-xs">
          {' '}
          Model: P2_PRO; P2_PRO; SUNMI; KM23P09540089; 7.1.2{' '}
        </Typography>
      </Space>
      <Modal open={open} onOpenChange={setOpen}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex-1">弹窗内容在这里显示</div>
          <div className="flex w-2/4 items-center justify-center">
            <Button onClick={() => setOpen(false)}>确认</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
