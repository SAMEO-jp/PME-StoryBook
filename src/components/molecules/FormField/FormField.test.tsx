import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormField } from './FormField'

describe('FormField', () => {
  it('正しくレンダリングされる', () => {
    render(<FormField label="ユーザー名" placeholder="名前を入力" />)
    expect(screen.getByText('ユーザー名')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('名前を入力')).toBeInTheDocument()
  })

  it('必須マークが表示される', () => {
    render(<FormField label="メール" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('エラーメッセージが表示される', () => {
    render(<FormField label="メール" errorMessage="有効なメールアドレスを入力してください" />)
    expect(screen.getByText('有効なメールアドレスを入力してください')).toBeInTheDocument()
  })

  it('Inputコンポーネントのpropsが正しく渡される', () => {
    render(<FormField label="パスワード" type="password" disabled />)
    const input = document.querySelector('input')
    expect(input).toHaveAttribute('type', 'password')
    expect(input).toBeDisabled()
  })
})
