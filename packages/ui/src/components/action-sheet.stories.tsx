import { ActionSheet, Button } from '../.'
import { useState } from 'react'

export default {
  title: 'UI/ActionSheet',
  component: ActionSheet
}

export const Example = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>操作弹窗</Button>
      <ActionSheet
        open={open}
        onOpenChange={setOpen}
        actions={[
          { label: '操作一', onClick: () => alert('操作一') },
          { label: '操作二', onClick: () => alert('操作二') }
        ]}
      />
    </>
  )
}