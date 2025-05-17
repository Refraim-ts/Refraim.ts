import { makeFeature } from '../../core/makeFeature'

export const registerMakeFeatureCommand = (cli: import('cac').CAC) => {
  cli
    .command('make:feature <name>', 'Generate initial feature files')
    .action(async (name: string) => {
      console.log(`🧬 Generating feature: ${name}...`)
      await makeFeature(name)
    })
}