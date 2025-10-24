import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './FormField'

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'ユーザー名',
    placeholder: 'ユーザー名を入力',
  },
}

export const Required: Story = {
  args: {
    label: 'メールアドレス',
    placeholder: 'example@mail.com',
    type: 'email',
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'メールアドレス',
    placeholder: 'example@mail.com',
    type: 'email',
    errorMessage: '有効なメールアドレスを入力してください',
  },
}

export const Password: Story = {
  args: {
    label: 'パスワード',
    placeholder: 'パスワードを入力',
    type: 'password',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'ユーザー名',
    placeholder: 'ユーザー名',
    disabled: true,
  },
}
