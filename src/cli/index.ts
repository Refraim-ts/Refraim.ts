// src/cli/index.ts
import { cac } from 'cac'
import { version } from '../../package.json'

const cli = cac('refraim')

cli.command('hello', 'Print welcome message').action(() => {
  console.log('🧠 Hello from Refraim!')
})

cli.help()
cli.version(version)

cli.parse()