import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
}
