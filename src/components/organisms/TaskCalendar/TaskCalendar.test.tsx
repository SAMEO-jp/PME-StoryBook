import React from 'react'
import { render, screen } from '@testing-library/react'
import { TaskCalendar } from './TaskCalendar'
import { Task } from './TaskCalendar'

describe('TaskCalendar', () => {
  const mockTasks: Task[] = [
    {
      id: '1',
      title: 'タスク1',
      startDate: new Date(2024, 0, 15),
      dueDate: new Date(2024, 0, 20),
    },
    {
      id: '2',
      title: 'タスク2',
      startDate: new Date(2024, 0, 22),
      dueDate: new Date(2024, 0, 28),
    },
  ]

  it('正しくレンダリングされる', () => {
    render(<TaskCalendar tasks={mockTasks} />)
    expect(screen.getByText('実績管理カレンダー')).toBeInTheDocument()
  })

  it('カスタムタイトルが表示される', () => {
    const customTitle = 'カスタムタイトル'
    render(<TaskCalendar tasks={mockTasks} title={customTitle} />)
    expect(screen.getByText(customTitle)).toBeInTheDocument()
  })

  it('タスクが空の場合でも正しくレンダリングされる', () => {
    render(<TaskCalendar tasks={[]} />)
    expect(screen.getByText('実績管理カレンダー')).toBeInTheDocument()
  })
})
