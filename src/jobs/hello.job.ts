// jobs/hello.job.ts
export const cron = '0 9 * * 1' // Every Monday 9am

export default async function job() {
  console.log('Running hello job...')
}