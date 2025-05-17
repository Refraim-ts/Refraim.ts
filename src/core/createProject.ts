import path from 'path'
import fs from 'fs/promises'
import { existsSync } from 'fs'

const TEMPLATE_DIR = path.resolve(__dirname, '../templates')

export async function createProject(projectName: string) {
  const targetPath = path.resolve(process.cwd(), projectName)

  if (existsSync(targetPath)) {
    console.error(`❌ Directory "${projectName}" already exists.`)
    process.exit(1)
  }

  // 再帰的にテンプレートをコピー
  await copyDir(TEMPLATE_DIR, targetPath)

  console.log(`✅ Project "${projectName}" created!`)
}

async function copyDir(src: string, dest: string) {
  await fs.mkdir(dest, { recursive: true })
  const entries = await fs.readdir(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath)
    } else if (entry.isFile()) {
      const content = await fs.readFile(srcPath)
      await fs.mkdir(path.dirname(destPath), { recursive: true })
      await fs.writeFile(destPath, content)
    }
  }
}