import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs']
}
export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: '主要按钮'
  }
}

export const Outline: StoryObj<typeof Button> = {
  args: {
    children: '轮廓按钮',
    variant: 'outline'
  }
}