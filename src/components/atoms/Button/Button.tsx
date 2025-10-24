import React from 'react'

export interface ButtonProps {
  /**
   * ボタンのラベル
   */
  label: string
  /**
   * ボタンのバリアント
   */
  variant?: 'primary' | 'secondary' | 'danger'
  /**
   * ボタンのサイズ
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 無効状態
   */
  disabled?: boolean
  /**
   * クリックハンドラ
   */
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) => {
  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s',
    opacity: disabled ? 0.5 : 1,
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#fff',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: '#fff',
    },
  }

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: '6px 12px',
      fontSize: '12px',
    },
    medium: {
      padding: '10px 20px',
      fontSize: '14px',
    },
    large: {
      padding: '14px 28px',
      fontSize: '16px',
    },
  }

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
