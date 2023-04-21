import type { Meta, StoryObj } from '@storybook/react'

import Switch from './Switch'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const On: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const TextChildren: Story = {
  args: {
    checked: true,
    checkedChildren: 'ON',
    unCheckedChildren: 'OFF',
  },
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
