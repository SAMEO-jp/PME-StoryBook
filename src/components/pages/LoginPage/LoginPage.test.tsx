import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginPage } from './LoginPage'

describe('LoginPage', () => {
  it('正しくレンダリングされる', () => {
    render(<LoginPage />)
    expect(screen.getByText('ログイン')).toBeInTheDocument()
    expect(screen.getByText('アカウントにログインしてください')).toBeInTheDocument()
  })

  it('ログインフォームが表示される', () => {
    render(<LoginPage />)
    expect(screen.getByText('メールアドレス')).toBeInTheDocument()
    expect(screen.getByText('パスワード')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ログイン/ })).toBeInTheDocument()
  })

  it('有効な入力でonLoginが呼ばれる', async () => {
    const user = userEvent.setup()
    const handleLogin = jest.fn().mockResolvedValue(undefined)
    render(<LoginPage onLogin={handleLogin} />)

    const emailInput = screen.getByPlaceholderText('example@mail.com')
    const passwordInput = screen.getByPlaceholderText('パスワードを入力')
    const submitButton = screen.getByRole('button', { name: /ログイン/ })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(handleLogin).toHaveBeenCalledWith('test@example.com', 'password123')
    })
  })

  it('ログイン失敗時にエラーメッセージが表示される', async () => {
    const user = userEvent.setup()
    const handleLogin = jest.fn().mockRejectedValue(new Error('認証エラー'))
    render(<LoginPage onLogin={handleLogin} />)

    const emailInput = screen.getByPlaceholderText('example@mail.com')
    const passwordInput = screen.getByPlaceholderText('パスワードを入力')
    const submitButton = screen.getByRole('button', { name: /ログイン/ })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'wrongpassword')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('認証エラー')).toBeInTheDocument()
    })
  })

  it('ローディング状態が正しく表示される', async () => {
    const user = userEvent.setup()
    const handleLogin = jest.fn(() => new Promise((resolve) => setTimeout(resolve, 100)))
    render(<LoginPage onLogin={handleLogin} />)

    const emailInput = screen.getByPlaceholderText('example@mail.com')
    const passwordInput = screen.getByPlaceholderText('パスワードを入力')
    const submitButton = screen.getByRole('button', { name: /ログイン/ })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    fireEvent.click(submitButton)

    expect(await screen.findByText('ログイン中...')).toBeInTheDocument()
  })
})
