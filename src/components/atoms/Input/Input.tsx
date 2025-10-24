import React from 'react'
import styles from './Input.module.css'

export interface InputProps {
  /**
   * 入力フィールドのタイプ
   */
  type?: 'text' | 'email' | 'password' | 'number'
  /**
   * プレースホルダーテキスト
   */
  placeholder?: string
  /**
   * 入力値
   */
  value?: string
  /**
   * 無効状態
   */
  disabled?: boolean
  /**
   * エラー状態
   */
  error?: boolean
  /**
   * 変更ハンドラ
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * ラベル
   */
  label?: string
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  disabled = false,
  error = false,
  onChange,
  label,
}) => {
  const inputClassName = `${styles.input} ${error ? styles.error : ''}`

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={inputClassName}
      />
    </div>
  )
}
