# PME-StoryBook

Next.js 15.1とReact 19を使用したコンポーネントライブラリプロジェクトです。Storybookを使用してコンポーネントを開発・管理します。

## プロジェクト構成

このプロジェクトはアトミックデザイン思想に基づいて構成されています：

```
src/
├── app/                    # Next.js App Router
├── components/             # UIコンポーネント
│   ├── atoms/             # 基本的なUIコンポーネント（Button、Inputなど）
│   ├── molecules/         # Atomsを組み合わせたコンポーネント
│   ├── organisms/         # 複雑なUIコンポーネント
│   ├── templates/         # ページテンプレート
│   └── pages/             # ページコンポーネント
└── features/              # 機能別モジュール（hooks、utilsなど）
    └── authentication/    # 認証機能
```

各コンポーネントフォルダには以下が含まれています：
- `*.tsx` - コンポーネント本体
- `*.test.tsx` - テストファイル
- `*.stories.tsx` - Storybookファイル
- `index.ts` - エクスポート

## 技術スタック

- **Next.js 15.1** - React フレームワーク
- **React 19** - UIライブラリ
- **TypeScript 5.7** - 型安全性
- **Storybook 8.5** - コンポーネント開発環境
- **Jest & React Testing Library** - テストフレームワーク

## セットアップ

依存関係をインストール：

```bash
npm install
```

## 開発

### Next.jsアプリケーションの起動

```bash
npm run dev
```

http://localhost:3000 でアクセスできます。

### Storybookの起動

```bash
npm run storybook
```

http://localhost:6006 でStorybookにアクセスできます。

### テストの実行

```bash
npm test
```

ウォッチモードでテストを実行：

```bash
npm run test:watch
```

## コンポーネント参照

各階層のコンポーネントは、以下のように参照できます：

```typescript
import { Button, Input } from '@/components/atoms'
import { FormField } from '@/components/molecules'
import { LoginForm } from '@/components/organisms'
import { AuthLayout } from '@/components/templates'
import { LoginPage } from '@/components/pages'
```

## ビルド

Next.jsアプリケーションのビルド：

```bash
npm run build
```

Storybookのビルド：

```bash
npm run build-storybook
```
