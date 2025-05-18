import fs from 'fs/promises'
import path from 'path'
import chalk from 'chalk'
import ora from 'ora'

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export async function makeFeature(name: string) {
  const base = path.resolve(process.cwd(), 'src')
  const spinner = ora(chalk.cyan(`🧬 Generating feature: ${name}...`)).start()

  const log = (msg: string) => {
    spinner.stop()
    console.log(chalk.gray(msg))
    spinner.start()
  }

  // --- schema ---
  log(`📐 Creating schema...`)
  const schemaDir = path.join(base, 'schema')
  await fs.mkdir(schemaDir, { recursive: true })
  await fs.writeFile(
    path.join(schemaDir, `${name}.schema.ts`),
    `// schema/${name}.schema.ts
import { z } from 'zod'

export const ${name}Schema = z.object({
  message: z.string(),
})
    `.trim()
  )

  // --- controller ---
  log(`📦 Creating controller...`)
  const controllerDir = path.join(base, 'controller')
  await fs.mkdir(controllerDir, { recursive: true })
  await fs.writeFile(
    path.join(controllerDir, `${name}.controller.ts`),
    `// controller/${name}.controller.ts
import { ${name}Service } from '../service/${name}.service'

export default {
  method: 'get',
  path: '/${name}',
  handler: () => {
    return ${name}Service()
  },
}
    `.trim()
  )

  // --- service ---
  log(`⚙️  Creating service...`)
  const serviceDir = path.join(base, 'service')
  await fs.mkdir(serviceDir, { recursive: true })
  await fs.writeFile(
    path.join(serviceDir, `${name}.service.ts`),
    `// service/${name}.service.ts
export function ${name}Service() {
  return { message: 'Hello from ${name} service!' }
}
    `.trim()
  )

  // --- pages ---
  const pagesDir = path.join(base, 'pages', name)
  await fs.mkdir(pagesDir, { recursive: true })

  log(`🖼  Creating page...`)
  await fs.writeFile(
    path.join(pagesDir, 'index.page.tsx'),
    `// pages/${name}/index.page.tsx
import { usePageData } from '../../hooks/usePageData'

export default function ${capitalize(name)}Page() {
  const data = usePageData<{ message: string }>()
  return <h1>{data.message}</h1>
}
    `.trim()
  )

  log(`📋 Creating meta...`)
  await fs.writeFile(
    path.join(pagesDir, 'index.meta.ts'),
    `// pages/${name}/index.meta.ts
export const meta = {
  title: '${name}',
  layout: 'dashboard',
  guard: 'auth',
}
    `.trim()
  )

  log(`🔄 Creating loader...`)
  await fs.writeFile(
    path.join(pagesDir, 'index.loader.ts'),
    `// pages/${name}/index.loader.ts
import { ${name}Service } from '../../service/${name}.service'

export async function loader() {
  return ${name}Service()
}
    `.trim()
  )

  spinner.succeed(chalk.green(`✨ Feature "${name}" created successfully.`))
  console.log(chalk.bold(`✅ Created feature: ${name}\n`))
}