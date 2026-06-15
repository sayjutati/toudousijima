import { copyFileSync, existsSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const requiredFiles = [
  {
    target: 'src/site-data.js',
    backup: 'src/site-data.example.js',
    label: 'サイト文言・リンク',
  },
]

for (const { target, backup, label } of requiredFiles) {
  const targetPath = join(root, target)
  const backupPath = join(root, backup)

  if (!existsSync(targetPath)) {
    if (!existsSync(backupPath)) {
      console.error(`\nERROR: ${target} (${label}) が見つかりません。`)
      console.error(`バックアップ ${backup} も存在しないため、復元できません。\n`)
      process.exit(1)
    }

    copyFileSync(backupPath, targetPath)
    console.warn(`\nWARN: ${target} を ${backup} から自動復元しました。`)
    console.warn('文言を編集していた場合は、内容を確認してください。\n')
    continue
  }

  if (!existsSync(backupPath) || statSync(targetPath).mtimeMs > statSync(backupPath).mtimeMs) {
    copyFileSync(targetPath, backupPath)
  }
}
