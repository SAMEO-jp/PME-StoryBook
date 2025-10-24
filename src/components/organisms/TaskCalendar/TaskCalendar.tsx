import React from 'react'
import { Calendar, momentLocalizer, Event } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styles from './TaskCalendar.module.css'

const localizer = momentLocalizer(moment)

export interface Task {
  id: string
  title: string
  startDate: Date
  dueDate: Date
  description?: string
}

export interface TaskCalendarProps {
  /**
   * カレンダーに表示するタスクのリスト
   */
  tasks: Task[]
  /**
   * タスクがクリックされた時のハンドラ
   */
  onTaskClick?: (task: Task) => void
  /**
   * カレンダーの高さ
   */
  height?: string | number
  /**
   * カレンダーのタイトル
   */
  title?: string
}

export const TaskCalendar: React.FC<TaskCalendarProps> = ({
  tasks,
  onTaskClick,
  height = '600px',
  title = '実績管理カレンダー',
}) => {
  const events: Event[] = tasks.map((task) => ({
    title: task.title,
    start: task.startDate,
    end: task.dueDate,
    resource: task,
  }))

  const handleSelectEvent = (event: Event) => {
    if (onTaskClick && event.resource) {
      onTaskClick(event.resource as Task)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.calendarWrapper} style={{ height }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          className={styles.calendar}
        />
      </div>
    </div>
  )
}
