import { createProject } from '../../core/makeProject'

export const registerNewCommand = (cli: import('cac').CAC) => {
  cli
    .command('new <project-name>', 'Create a new Refraim project')
    .action(async (name: string) => {
      console.log(`🧬 Creating Refraim project: ${name}...`)
      await createProject(name)
    })
}