import fs from 'fs/promises'
import path from 'path'

export async function makeJob(name: string) {
  const jobDir = path.resolve(process.cwd(), 'src/jobs')
  await fs.mkdir(jobDir, { recursive: true })

  const file = path.join(jobDir, `${name}.job.ts`)
  const content = `
// jobs/${name}.job.ts
export const cron = '0 9 * * 1' // Every Monday 9am

export default async function job() {
  console.log('Running ${name} job...')
}
  `.trim()

  await fs.writeFile(file, content)
  console.log(`✅ Created job: src/jobs/${name}.job.ts`)
}