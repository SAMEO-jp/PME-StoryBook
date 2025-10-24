import React, { useState } from 'react'
import { AuthLayout } from '@/components/templates'
import { LoginForm } from '@/components/organisms'

export interface LoginPageProps {
  /**
   * ログイン処理のハンドラ
   */
  onLogin?: (email: string, password: string) => Promise<void>
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (email: string, password: string) => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      if (onLogin) {
        await onLogin(email, password)
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'ログインに失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout title="ログイン" subtitle="アカウントにログインしてください">
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} errorMessage={errorMessage} />
    </AuthLayout>
  )
}
