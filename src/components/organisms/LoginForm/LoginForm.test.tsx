import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('正しくレンダリングされる', () => {
    render(<LoginForm />)
    expect(screen.getByText('ログイン')).toBeInTheDocument()
    expect(screen.getByText('メールアドレス')).toBeInTheDocument()
    expect(screen.getByText('パスワード')).toBeInTheDocument()
  })

  it('必須フィールドが空の場合エラーが表示される', async () => {
    render(<LoginForm />)
    const submitButton = screen.getByRole('button', { name: /ログイン/ })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('メールアドレスを入力してください')).toBeInTheDocument()
      expect(screen.getByText('パスワードを入力してください')).toBeInTheDocument()
    })
  })

  it('無効なメールアドレスでエラーが表示される', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const emailInput = screen.getByPlaceholderText('example@mail.com')
    const submitButton = screen.getByRole('button', { name: /ログイン/ })

    await user.type(emailInput, 'invalid-email')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('有効なメールアドレスを入力してください')).toBeInTheDocument()
    })
  })

  it('短いパスワードでエラーが表示される', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const passwordInput = screen.getByPlaceholderText('パスワードを入力')
    const submitButton = screen.getByRole('button', { name: /ログイン/ })

    await user.type(passwordInput, '12345')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('パスワードは6文字以上で入力してください')).toBeInTheDocument()
    })
  })

  it('有効な入力でonSubmitが呼ばれる', async () => {
    const user = userEvent.setup()
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    const emailInput = screen.getByPlaceholderText('example@mail.com')
    const passwordInput = screen.getByPlaceholderText('パスワードを入力')
    const submitButton = screen.getByRole('button', { name: /ログイン/ })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith('test@example.com', 'password123')
    })
  })

  it('エラーメッセージが表示される', () => {
    render(<LoginForm errorMessage="ログインに失敗しました" />)
    expect(screen.getByText('ログインに失敗しました')).toBeInTheDocument()
  })

  it('ローディング状態が正しく表示される', () => {
    render(<LoginForm isLoading />)
    expect(screen.getByText('ログイン中...')).toBeInTheDocument()
  })
})
