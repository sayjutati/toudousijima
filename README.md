# 橙々しじま 公式サイト

ラジオ系配信者・橙々しじまの公式ランディングページです。

## 開発

```bash
npm install
npm run dev
```

## 更新方法

文言・リンク・お知らせは `src/site-data.js` を編集してください。

- SNSリンク: `social`（アイコンは `public/icons/`）
- 配信媒体: `streams`
- プロフィール: `profiles`

`src/site-data.example.js` はバックアップ用です。`npm run dev` / `build` 実行時に自動同期されます。**直接編集しないでください。**

## トラブルシュート

`npm run dev` で `site-data.js` が見つからないエラーが出た場合:

1. `npm run dev` を再実行（バックアップから自動復元されます）
2. 復元後、`src/site-data.js` の内容を確認
3. 今後のために Git でプロジェクトを管理することを推奨

## ビルド

```bash
npm run build
```

`dist/` に静的ファイルが出力されます。
