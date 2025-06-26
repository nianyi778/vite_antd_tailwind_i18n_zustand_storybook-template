import { useState } from 'react'

import { SegmentedControl } from './segmented-control'

export default {
  title: 'UI/SegmentedControl',
  component: SegmentedControl,
}

export const Example = () => {
  const [value, setValue] = useState('A')
  return (
    <SegmentedControl
      options={['A', 'B', 'C']}
      value={value}
      onChange={setValue}
    />
  )
}
