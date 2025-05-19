import path from 'path'
import fs from 'fs/promises'
import chalk from 'chalk'
import ora from 'ora'
import { existsSync } from 'fs'
import { spawn } from 'child_process'
const TEMPLATE_DIR = path.resolve(__dirname, '../templates')

export async function createProject(projectName: string) {
  const targetPath = path.resolve(process.cwd(), projectName)

  if (existsSync(targetPath)) {
    console.error(`❌ Directory "${projectName}" already exists.`)
    process.exit(1)
  }

  // 再帰的にテンプレートをコピー
 const spinner = ora(chalk.cyan(`Creating project: ${projectName}`)).start()

await copyDir(TEMPLATE_DIR, targetPath)
await new Promise((r) => setTimeout(r, 300)) // for suspense
const rebuild = spawn('pnpm', ['rebuild', 'esbuild'], {
  cwd: targetPath,
  stdio: 'inherit',
  shell: true,
})
// ステップごとに delay（任意）つけても良い

rebuild.on('close', () => {
  spinner.succeed(chalk.green(`✔ Project "${projectName}" is alive.`))
  console.log(chalk.bold(`\n🧠 Structure has been born.`))
  console.log(`\nNext steps:`)
  console.log(chalk.cyan(`  cd ${projectName}`))
  console.log(chalk.cyan(`  pnpm install && refraim dev\n`))
})

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
}