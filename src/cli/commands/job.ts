import { makeJob } from '../../core/makeJob'

export const registerMakeJobCommand = (cli: import('cac').CAC) => {
  cli
    .command('make:job <name>', 'Generate a scheduled job file')
    .action(async (name: string) => {
      console.log(`🕒 Generating job: ${name}...`)
      await makeJob(name)
    })
}