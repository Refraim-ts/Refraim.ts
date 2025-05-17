import fs from 'fs/promises'
import path from 'path'

export async function makeFeature(name: string) {
  const dir = path.resolve(process.cwd(), 'src/controller')
  await fs.mkdir(dir, { recursive: true })

  const file = path.join(dir, `${name}.controller.ts`)
  const content = `
// controller/${name}.controller.ts
export default {
  method: 'get',
  path: '/${name}',
  handler: () => {
    return { message: 'Hello from Refraim controller!' }
  },
}
  `.trim()

  await fs.writeFile(file, content)
  console.log(`✅ Created: src/controller/${name}.controller.ts`)
}