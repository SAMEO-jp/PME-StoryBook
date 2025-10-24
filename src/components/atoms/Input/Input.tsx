import React from 'react'

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
  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    fontSize: '14px',
    border: `1px solid ${error ? '#dc3545' : '#ced4da'}`,
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.2s',
    backgroundColor: disabled ? '#e9ecef' : '#fff',
    cursor: disabled ? 'not-allowed' : 'text',
  }

  const labelStyles: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#495057',
  }

  return (
    <div style={{ width: '100%' }}>
      {label && <label style={labelStyles}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        style={inputStyles}
      />
    </div>
  )
}
