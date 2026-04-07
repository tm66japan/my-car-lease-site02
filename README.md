# my-car-lease-site

カーリース（車のサブスク）比較サイト。Next.js製、Vercel対応。

## 機能

- **30秒診断シミュレーター** - 予算・車種・用途・期間から最適プランを提案
- **プラン比較表** - 主要カーリース5社を一目で比較
- **カーリースの特徴紹介** - メリットをわかりやすく解説
- **FAQ** - よくある質問に回答
- レスポンシブデザイン（スマホ対応）

## セットアップ

```bash
npm install
npm run dev
```

## Vercelでのデプロイ

1. [Vercel](https://vercel.com) にログイン
2. 「New Project」→ このリポジトリを選択
3. Frameworkに「Next.js」が自動検出されます
4. 「Deploy」をクリック

以上でデプロイ完了です。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- CSS Variables（Tailwindなし・ピュアCSS）
- Google Fonts（Noto Sans JP, Montserrat）
