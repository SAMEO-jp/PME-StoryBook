import type { Meta, StoryObj } from '@storybook/react'
import { AuthLayout } from './AuthLayout'
import { LoginForm } from '@/components/organisms'

const meta = {
  title: 'Templates/AuthLayout',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AuthLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        Content goes here
      </div>
    ),
  },
}

export const WithLoginForm: Story = {
  args: {
    title: 'ログイン',
    subtitle: 'アカウントにログインしてください',
    children: <LoginForm />,
  },
}

export const CustomTitle: Story = {
  args: {
    title: 'サインアップ',
    subtitle: '新しいアカウントを作成',
    children: (
      <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        Sign up form would go here
      </div>
    ),
  },
}
