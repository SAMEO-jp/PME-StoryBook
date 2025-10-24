import React from 'react'

export interface AuthLayoutProps {
  /**
   * 子要素
   */
  children: React.ReactNode
  /**
   * タイトル
   */
  title?: string
  /**
   * サブタイトル
   */
  subtitle?: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = 'Welcome',
  subtitle,
}) => {
  const containerStyles: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  }

  const contentStyles: React.CSSProperties = {
    width: '100%',
    maxWidth: '500px',
  }

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '40px',
  }

  const titleStyles: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 700,
    color: '#333',
    marginBottom: '8px',
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: '16px',
    color: '#666',
  }

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <div style={headerStyles}>
          <h1 style={titleStyles}>{title}</h1>
          {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}
