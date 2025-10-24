import React, { useState } from 'react'
import { FormField } from '@/components/molecules'
import { Button } from '@/components/atoms'

export interface LoginFormProps {
  /**
   * ログイン処理のハンドラ
   */
  onSubmit?: (email: string, password: string) => void
  /**
   * ローディング状態
   */
  isLoading?: boolean
  /**
   * エラーメッセージ
   */
  errorMessage?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
  errorMessage,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validate = () => {
    let isValid = true

    if (!email) {
      setEmailError('メールアドレスを入力してください')
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('有効なメールアドレスを入力してください')
      isValid = false
    } else {
      setEmailError('')
    }

    if (!password) {
      setPasswordError('パスワードを入力してください')
      isValid = false
    } else if (password.length < 6) {
      setPasswordError('パスワードは6文字以上で入力してください')
      isValid = false
    } else {
      setPasswordError('')
    }

    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate() && onSubmit) {
      onSubmit(email, password)
    }
  }

  const formStyles: React.CSSProperties = {
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    width: '400px',
  }

  const titleStyles: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '24px',
    textAlign: 'center',
    color: '#333',
  }

  const errorMessageStyles: React.CSSProperties = {
    color: '#dc3545',
    fontSize: '14px',
    marginBottom: '16px',
    padding: '10px',
    backgroundColor: '#f8d7da',
    borderRadius: '4px',
  }

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2 style={titleStyles}>ログイン</h2>
      {errorMessage && <div style={errorMessageStyles}>{errorMessage}</div>}
      <FormField
        label="メールアドレス"
        type="email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={emailError}
        required
      />
      <FormField
        label="パスワード"
        type="password"
        placeholder="パスワードを入力"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={passwordError}
        required
      />
      <div style={{ marginTop: '24px' }}>
        <Button
          label={isLoading ? 'ログイン中...' : 'ログイン'}
          variant="primary"
          size="large"
          disabled={isLoading}
          onClick={handleSubmit}
        />
      </div>
    </form>
  )
}
