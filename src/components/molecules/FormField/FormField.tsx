import React from 'react'
import { Input, InputProps } from '@/components/atoms'

export interface FormFieldProps extends Omit<InputProps, 'label'> {
  /**
   * フィールドのラベル
   */
  label: string
  /**
   * エラーメッセージ
   */
  errorMessage?: string
  /**
   * 必須フィールド
   */
  required?: boolean
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  errorMessage,
  required = false,
  error,
  ...inputProps
}) => {
  const containerStyles: React.CSSProperties = {
    marginBottom: '20px',
    width: '300px',
  }

  const labelStyles: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#495057',
  }

  const errorStyles: React.CSSProperties = {
    color: '#dc3545',
    fontSize: '12px',
    marginTop: '4px',
  }

  return (
    <div style={containerStyles}>
      <label style={labelStyles}>
        {label}
        {required && <span style={{ color: '#dc3545' }}> *</span>}
      </label>
      <Input {...inputProps} error={error || !!errorMessage} />
      {errorMessage && <div style={errorStyles}>{errorMessage}</div>}
    </div>
  )
}
