import type { Meta, StoryObj } from '@storybook/react'
import { LoginPage } from './LoginPage'

const meta = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onLogin: async (email, password) => {
      console.log('Login attempt:', email, password)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(`Login successful!\nEmail: ${email}`)
    },
  },
}

export const WithError: Story = {
  args: {
    onLogin: async (email, password) => {
      console.log('Login attempt:', email, password)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      throw new Error('メールアドレスまたはパスワードが正しくありません')
    },
  },
}

export const SlowNetwork: Story = {
  args: {
    onLogin: async (email, password) => {
      console.log('Login attempt:', email, password)
      // Simulate slow network
      await new Promise((resolve) => setTimeout(resolve, 3000))
      alert(`Login successful!\nEmail: ${email}`)
    },
  },
}
