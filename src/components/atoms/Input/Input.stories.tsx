import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'ユーザー名',
    placeholder: 'ユーザー名を入力',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    label: 'メールアドレス',
    placeholder: 'example@mail.com',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'パスワード',
    placeholder: 'パスワードを入力',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Disabled',
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    error: true,
  },
}
