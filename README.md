# Svelte 5 TODO Example（Runes 学習用）

Svelte 5 の Runes システム（`$state`・`$derived`・`$effect`・`$props`）を TypeScript で学ぶための TODO アプリです。
**SvelteKit を使わない純粋な Svelte アプリ**として構築することで、Runes 本体に集中できる構造にしています。

> 本リポジトリは [**TypeScriptで学ぶ Svelte 5/SvelteKit 学習ガイド**](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) の教材サンプルです。
> コードの**解説は学習サイト側**に集約されています。本リポジトリは「動くコード」と「解説との対応表」を提供します。

- 📖 **学習サイト記事**: [TODO アプリ実装例](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/examples/todo-app/)
- 🌐 **デモサイト**: [https://shuji-bonji.github.io/svelte5-todo-example/](https://shuji-bonji.github.io/svelte5-todo-example/)
- 🗺️ **対応表（記事 ⇔ ファイル）**: [docs/learning-map.md](./docs/learning-map.md)

## このサンプルの位置付け

Svelte 5 の**Runes システムを実装レベルで理解する**ための最小構成サンプルです。
SvelteKit 固有の機能（ルーティング・Load 関数・Form Actions）は含まず、**クライアントサイドの状態管理**にフォーカスしています。

### 学べること

- ✅ **`$state`** を使ったリアクティブな状態管理（`todos`、`filter`）
- ✅ **`$derived`** と **`$derived.by()`** の違い（単一式 vs 複数文）
- ✅ **`$props()`** による型安全なコンポーネント props 定義（Callback props パターン）
- ✅ **`.svelte.ts` モジュール**（Runes をコンポーネント外で使う）
- ✅ **ゲッターによるカプセル化**（`get todos()` で読み取り専用公開）
- ✅ **グローバルストアパターン**（関数ファクトリー + シングルトンインスタンス）
- ✅ **LocalStorage 同期** と Date 型の復元（`StoredTodo` 型分離）
- ✅ **新しいイベント記法**（`onclick`、`onkeydown`、`onsubmit`）

### 学べないこと（＝他サンプルの担当範囲）

| 学びたいこと | 該当サンプル |
|-------------|------------|
| SvelteKit のルーティング・Load 関数・レイアウト | [svelte5-blog-example](https://github.com/shuji-bonji/svelte5-blog-example) |
| Markdown ベースのコンテンツ管理と全文検索 | [svelte5-blog-markdown](https://github.com/shuji-bonji/svelte5-blog-markdown) |
| Cookie/Session 認証 | [svelte5-auth-basic](https://github.com/shuji-bonji/svelte5-auth-basic) |
| JWT 認証 | [svelte5-auth-jwt](https://github.com/shuji-bonji/svelte5-auth-jwt) |

## 機能

### CRUD
- タスクの追加・完了切替・削除・編集（ダブルクリック）
- 一括完了/解除（`toggleAll`）
- 完了済み一括削除（`clearCompleted`）

### フィルタリング
- `all` / `active` / `completed`

### 永続化
- LocalStorage への自動保存・自動復元
- Date 型のシリアライズ／デシリアライズを明示的に扱う

### UI/UX
- Enter で編集確定、Escape で編集キャンセル
- アクティブタスクのカウント表示
- ダークモード対応

## 技術スタック

| 項目 | バージョン |
|------|-----------|
| Svelte | 5.38.x |
| TypeScript | 5.8.x |
| Vite | 7.1.x |

SvelteKit や adapter-* は使用しません（純粋な SPA）。

## セットアップ

```bash
# リポジトリを取得
git clone https://github.com/shuji-bonji/svelte5-todo-example.git
cd svelte5-todo-example

# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 型チェック
npm run check

# 本番ビルド
npm run build

# ビルド成果物のプレビュー
npm run preview
```

Node.js 20.x LTS 以上を推奨します。

## プロジェクト構成

```
svelte5-todo-example/
├── src/
│   ├── main.ts                      # エントリーポイント（Svelte アプリを mount）
│   ├── App.svelte                   # ルートコンポーネント
│   ├── types/
│   │   └── todo.ts                  # Todo / StoredTodo / FilterType / TodoStore
│   ├── stores/
│   │   └── todo.svelte.ts           # Runes を使ったストア（単一ファイル）
│   └── components/
│       ├── TodoHeader.svelte        # 入力フォーム
│       ├── TodoItem.svelte          # 個別タスク（編集モード含む）
│       └── TodoFooter.svelte        # フィルター UI
├── vite.config.ts
├── svelte.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── docs/
    └── learning-map.md               # 記事 ⇔ ファイル対応表
```

各ファイルが学習サイトのどの章に対応するかは [docs/learning-map.md](./docs/learning-map.md) を参照してください。

## 学習の進め方（推奨）

1. 学習サイトの [TODO アプリ実装例](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/examples/todo-app/) を読む
2. 学習サイトの [Svelte 5 Runes](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/runes/) 章も併読
3. [docs/learning-map.md](./docs/learning-map.md) で記事と本リポジトリのファイルを突き合わせる
4. `npm run dev` で動かしながらコードを読む
5. 発展として SvelteKit を使った実装例（[svelte5-blog-example](https://github.com/shuji-bonji/svelte5-blog-example) など）へ

## 応用編の方向性

本サンプルをベースに拡張する際の候補：

### 1. PWA 化
Service Worker によるオフライン対応、Web App Manifest、プッシュ通知。

### 2. SvelteKit 化 + サーバー DB
`+page.server.ts` による Load / Form Actions、Prisma/Drizzle での永続化、認証、マルチユーザー、WebSocket 同期。

いずれも**本リポジトリのスコープ外**です。基礎を押さえたい場合は他サンプル（blog-example、auth-basic など）を参照してください。

## 関連リンク

- [TypeScriptで学ぶ Svelte 5/SvelteKit 学習ガイド](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/)
- [Svelte 公式ドキュメント](https://svelte.dev/docs)
- [Svelte Runes リファレンス](https://svelte.dev/docs/svelte/what-are-runes)

## ライセンス

MIT
