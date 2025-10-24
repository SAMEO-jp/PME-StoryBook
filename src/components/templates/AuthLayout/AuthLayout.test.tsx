import React from 'react'
import { render, screen } from '@testing-library/react'
import { AuthLayout } from './AuthLayout'

describe('AuthLayout', () => {
  it('正しくレンダリングされる', () => {
    render(
      <AuthLayout>
        <div>Test Content</div>
      </AuthLayout>
    )
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('カスタムタイトルが表示される', () => {
    render(
      <AuthLayout title="カスタムタイトル">
        <div>Content</div>
      </AuthLayout>
    )
    expect(screen.getByText('カスタムタイトル')).toBeInTheDocument()
  })

  it('サブタイトルが表示される', () => {
    render(
      <AuthLayout title="Title" subtitle="This is a subtitle">
        <div>Content</div>
      </AuthLayout>
    )
    expect(screen.getByText('This is a subtitle')).toBeInTheDocument()
  })

  it('子要素が正しくレンダリングされる', () => {
    render(
      <AuthLayout>
        <div data-testid="child">Child Component</div>
      </AuthLayout>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })
})
