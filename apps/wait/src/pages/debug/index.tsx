import { Button, Switch } from '@elestyle/ui'
import { useState } from 'react'

export default function Debug() {
  const [on, setOn] = useState(false)
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#ccc]">
      {/* <Button variant={'default'} ghost>
        dashed{' '}
      </Button>
      <Button variant={'default'}>default </Button>
      <Button variant={'primary'}>primary </Button>
      <Button variant={'secondary'}>secondary </Button>
      <Button variant={'subtle'}>subtle </Button>
      <Button variant={'text'}>text </Button> */}
      <div className="p-4">
        <Switch checked={on} onCheckedChange={setOn} />
        <p className="mt-2">当前状态: {on ? '开' : '关'}</p>
      </div>

      <Button variant={'outline'} disabled={on}>
        outline{' '}
      </Button>
      <Button variant={'default'} disabled={on}>
        default{' '}
      </Button>
      <Button variant={'destructive'} disabled={on}>
        destructive{' '}
      </Button>
      <Button variant={'secondary'} disabled={on}>
        secondary{' '}
      </Button>
      <Button variant={'ghost'} disabled={on}>
        ghost{' '}
      </Button>
      <Button variant={'link'} disabled={on}>
        link{' '}
      </Button>

      <div className="rounded-lg bg-card p-4 text-card-foreground shadow">
        <h2 className="text-lg font-bold">标题</h2>
        <p className="text-muted-foreground">副标题或说明文字</p>
      </div>
    </div>
  )
}
