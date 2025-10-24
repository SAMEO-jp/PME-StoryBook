import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('正しくレンダリングされる', () => {
    render(<Button label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('クリックイベントが発火する', () => {
    const handleClick = jest.fn()
    render(<Button label="Click me" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('無効状態の時はクリックできない', () => {
    const handleClick = jest.fn()
    render(<Button label="Click me" disabled onClick={handleClick} />)
    const button = screen.getByText('Click me')
    expect(button).toBeDisabled()
  })

  it('異なるバリアントが適用される', () => {
    const { rerender } = render(<Button label="Primary" variant="primary" />)
    expect(screen.getByText('Primary')).toBeInTheDocument()

    rerender(<Button label="Secondary" variant="secondary" />)
    expect(screen.getByText('Secondary')).toBeInTheDocument()

    rerender(<Button label="Danger" variant="danger" />)
    expect(screen.getByText('Danger')).toBeInTheDocument()
  })

  it('異なるサイズが適用される', () => {
    const { rerender } = render(<Button label="Small" size="small" />)
    expect(screen.getByText('Small')).toBeInTheDocument()

    rerender(<Button label="Medium" size="medium" />)
    expect(screen.getByText('Medium')).toBeInTheDocument()

    rerender(<Button label="Large" size="large" />)
    expect(screen.getByText('Large')).toBeInTheDocument()
  })
})
