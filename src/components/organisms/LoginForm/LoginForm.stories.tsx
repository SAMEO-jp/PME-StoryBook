import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (email, password) => {
      console.log('Login with:', email, password)
      alert(`Login attempt with:\nEmail: ${email}\nPassword: ${password}`)
    },
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const WithError: Story = {
  args: {
    errorMessage: 'メールアドレスまたはパスワードが正しくありません',
    onSubmit: (email, password) => {
      console.log('Login with:', email, password)
    },
  },
}
