# 学習マップ（記事 ⇔ ファイル対応表）

本リポジトリと [TypeScriptで学ぶ Svelte 5/SvelteKit 学習ガイド](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/) の対応表です。
学習サイトの記事を読みながらコードを追うための「目次」として使ってください。

> **解説は学習サイト側に集約**しています。本リポジトリ内のコードはコメント最小限で、実装そのものを読むことに集中できるようにしています。

## 対象記事

[examples/todo-app — TODO アプリ実装例](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/examples/todo-app/)

## 前提

本サンプルは **SvelteKit を使わない純粋な Svelte アプリ**です。
ルーティング・SSR・Load 関数等は扱いません。SvelteKit 固有の知識が必要な場合は [svelte5-blog-example](https://github.com/shuji-bonji/svelte5-blog-example) を参照してください。

## 章別対応表

学習サイト記事の章立てと、本リポジトリのファイルの対応です。

| # | 学習サイトの章 | リポジトリのファイル | 主な学習ポイント |
|---|---------------|-------------------|---------------|
| 1 | Svelte 5 Runesによる状態管理 | [`src/stores/todo.svelte.ts`](../src/stores/todo.svelte.ts) | `$state`、`$derived`、`$derived.by()`、ゲッターによる公開 API、グローバルストアパターン |
| 2 | TypeScriptによる型定義 | [`src/types/todo.ts`](../src/types/todo.ts) | `Todo` / `StoredTodo` / `FilterType` / `TodoStore` の役割分担 |
| 3 | LocalStorageとの同期 | [`src/stores/todo.svelte.ts`](../src/stores/todo.svelte.ts) の `loadFromStorage` / `saveToStorage` | Date → string のシリアライズ、`StoredTodo` を挟む型安全な復元、`typeof window === 'undefined'` ガード |
| 4 | 編集モードの実装 | [`src/components/TodoItem.svelte`](../src/components/TodoItem.svelte) | `$state` でのローカル状態、`$props()`、`onkeydown` / `ondblclick` / `onblur`、Enter/Escape ハンドリング |
| 5 | コンポーネント構成（TodoHeader / TodoItem / TodoFooter） | [`src/components/TodoHeader.svelte`](../src/components/TodoHeader.svelte)<br>[`src/components/TodoItem.svelte`](../src/components/TodoItem.svelte)<br>[`src/components/TodoFooter.svelte`](../src/components/TodoFooter.svelte) | Callback props パターン、`interface Props`、`$props()` デストラクチャリング |

## 記事では扱わないファイル

記事の本筋には出てきませんが、完動サンプルとして含まれているファイルです。

| ファイル | 役割 |
|---------|------|
| [`src/App.svelte`](../src/App.svelte) | ルートコンポーネント。ストアをインポートし、子コンポーネントに Callback props を渡す |
| [`src/main.ts`](../src/main.ts) | Svelte 5 の `mount()` API でアプリを DOM に接続 |
| [`src/vite-env.d.ts`](../src/vite-env.d.ts) | Vite の型リファレンス |
| `index.html`（ルート） | エントリ HTML |
| `vite.config.ts` / `svelte.config.js` | ビルド設定 |

## 学習サイトの関連章

Runes の深い理解のため、記事と合わせて読むと役立ちます。

| 概念 | 学習サイトの章 |
|------|-------------|
| Runes 全体像 | [Svelte / Runes](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/runes/) |
| `$state` | [Svelte / Runes / $state](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/runes/state/) |
| `$derived` / `$derived.by()` | [Svelte / Runes / $derived](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/runes/derived/) |
| `$effect` | [Svelte / Runes / $effect](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/runes/effect/) |
| `$props()` | [Svelte / Runes / $props](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/runes/props/) |
| 新しいイベント記法（`onclick` など） | [Svelte / Basics / テンプレート構文](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/basics/template-syntax/) |
| `.svelte.ts` モジュール | [Svelte / Advanced / リアクティブストア](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/advanced/reactive-stores/) |
| TypeScript 統合 | [Svelte / Basics / TypeScript 統合](https://shuji-bonji.github.io/Svelte-and-SvelteKit-with-TypeScript/svelte/basics/typescript-integration/) |

## 記事と実装の差分

記事と実リポジトリは基本的に一致していますが、一点だけ補足があります。

| 観点 | 記事の説明 | 本リポジトリの実装 |
|------|-----------|------------------|
| LocalStorage の型処理 | `StoredTodo` 型を導入して `any` を排除 | 同上（`src/types/todo.ts` に `StoredTodo` を定義） |
| `$effect` による LocalStorage 同期 | 記事では `$effect` を使う例も紹介 | 本リポジトリは各 CRUD 関数内で明示的に `saveToStorage` を呼ぶ方式を採用 |

後者は「副作用を明示的にする」設計意図です。`$effect` でもよいですが、呼び出しタイミングがわかりやすい方を優先しています。

## 次のステップ（他サンプル）

本サンプルで Runes を体得したら、SvelteKit を使う側のサンプルへ。

| 方向 | サンプル | 追加で学べること |
|------|---------|---------------|
| SvelteKit の基礎 | [svelte5-blog-example](https://github.com/shuji-bonji/svelte5-blog-example) | ルーティング・Load 関数・レイアウト |
| Markdown 管理と検索 | [svelte5-blog-markdown](https://github.com/shuji-bonji/svelte5-blog-markdown) | Vite glob import、MiniSearch |
| サーバーサイド認証 | [svelte5-auth-basic](https://github.com/shuji-bonji/svelte5-auth-basic) | hooks.server / Form Actions / Prisma |
| トークン認証 | [svelte5-auth-jwt](https://github.com/shuji-bonji/svelte5-auth-jwt) | JWT、ステートレス認証 |
