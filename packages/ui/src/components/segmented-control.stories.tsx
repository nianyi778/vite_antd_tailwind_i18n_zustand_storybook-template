import { SegmentedControl } from './segmented-control'
import { useState } from 'react'

export default {
  title: 'UI/SegmentedControl',
  component: SegmentedControl
}

export const Example = () => {
  const [value, setValue] = useState('A')
  return (
    <SegmentedControl options={['A', 'B', 'C']} value={value} onChange={setValue} />
  )
}