import React from 'react'
import styles from './Button.module.css'

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
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}
