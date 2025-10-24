import type { Meta, StoryObj } from '@storybook/react'
import { TaskCalendar } from './TaskCalendar'
import { Task } from './TaskCalendar'

const meta = {
  title: 'Organisms/TaskCalendar',
  component: TaskCalendar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TaskCalendar>

export default meta
type Story = StoryObj<typeof meta>

// サンプルタスクデータ
const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'プロジェクト企画',
    startDate: new Date(2024, 0, 15),
    dueDate: new Date(2024, 0, 20),
    description: 'プロジェクトの企画書を作成',
  },
  {
    id: '2',
    title: 'デザイン作成',
    startDate: new Date(2024, 0, 22),
    dueDate: new Date(2024, 0, 28),
    description: 'UIデザインの作成',
  },
  {
    id: '3',
    title: '開発フェーズ1',
    startDate: new Date(2024, 1, 1),
    dueDate: new Date(2024, 1, 15),
    description: 'フロントエンド開発',
  },
  {
    id: '4',
    title: 'テスト実施',
    startDate: new Date(2024, 1, 16),
    dueDate: new Date(2024, 1, 20),
    description: '単体テストと結合テスト',
  },
  {
    id: '5',
    title: 'リリース準備',
    startDate: new Date(2024, 1, 21),
    dueDate: new Date(2024, 1, 25),
    description: '本番環境へのデプロイ準備',
  },
]

export const Default: Story = {
  args: {
    tasks: sampleTasks,
    onTaskClick: (task) => {
      console.log('Task clicked:', task)
      alert(
        `タスク: ${task.title}\n期間: ${task.startDate.toLocaleDateString()} - ${task.dueDate.toLocaleDateString()}`
      )
    },
  },
}

export const Empty: Story = {
  args: {
    tasks: [],
  },
}

export const SingleTask: Story = {
  args: {
    tasks: [sampleTasks[0]],
    title: '単一タスク表示',
  },
}

export const CustomHeight: Story = {
  args: {
    tasks: sampleTasks,
    height: '800px',
    title: 'カスタム高さのカレンダー',
  },
}

export const ManyTasks: Story = {
  args: {
    tasks: [
      ...sampleTasks,
      {
        id: '6',
        title: 'ドキュメント作成',
        startDate: new Date(2024, 1, 10),
        dueDate: new Date(2024, 1, 12),
      },
      {
        id: '7',
        title: 'コードレビュー',
        startDate: new Date(2024, 1, 5),
        dueDate: new Date(2024, 1, 7),
      },
      {
        id: '8',
        title: 'ミーティング',
        startDate: new Date(2024, 1, 8),
        dueDate: new Date(2024, 1, 8),
      },
    ],
    title: '複数タスクの表示',
  },
}
