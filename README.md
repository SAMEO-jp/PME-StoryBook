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
  - **a11y addon** - アクセシビリティテスト
- **Jest & React Testing Library** - テストフレームワーク
- **CSS Modules** - コンポーネントスタイリング
- **Prettier** - コードフォーマッター
- **ESLint** - コード品質チェック
- **Husky + lint-staged** - Git フック管理

## スタイリング

このプロジェクトは CSS Modules を使用してコンポーネントをスタイリングしています。

### デザイントークン

グローバルなデザイントークンは `src/styles/tokens.css` で定義されています：

- カラーパレット（Primary, Secondary, Gray, Semantic）
- スペーシング
- フォントサイズと行の高さ
- ボーダー半径
- シャドウ
- トランジション
- z-index 値

### CSS Modules の使用例

```typescript
import styles from './Component.module.css'

export const Component = () => {
  return <div className={styles.container}>Content</div>
}
```

CSS ファイル内でデザイントークンを使用：

```css
.container {
  padding: var(--spacing-md);
  background-color: var(--color-bg-default);
  border-radius: var(--radius-md);
}
```

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

カバレッジレポート付きでテストを実行：

```bash
npm run test:coverage
```

### コード品質

コードをフォーマット：

```bash
npm run format
```

フォーマットをチェック：

```bash
npm run format:check
```

Lint を実行：

```bash
npm run lint
```

Lint エラーを自動修正：

```bash
npm run lint:fix
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
