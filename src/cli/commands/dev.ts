// src/cli/commands/dev.ts
import { spawn } from 'child_process'

export const registerDevCommand = (cli: import('cac').CAC) => {
  cli.command('dev', 'Start dev server').action(() => {
    console.log('🚀 Starting Refraim dev server...\n')

    const proc = spawn('pnpm', ['dev'], {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    })

    proc.on('close', (code) => {
      process.exit(code ?? 0)
    })
  })
}