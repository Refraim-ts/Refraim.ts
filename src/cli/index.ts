import { cac } from 'cac'
import { version } from '../../package.json'
import { registerNewCommand } from './commands/new'
import { registerDevCommand } from './commands/dev'
import { registerMakeFeatureCommand } from './commands/make'
import { registerMakeJobCommand } from './commands/job'

const cli = cac('refraim')

// 🎯 各コマンドを登録
registerNewCommand(cli)
registerDevCommand(cli)
registerMakeFeatureCommand(cli)
registerMakeJobCommand(cli)
cli.help()
cli.version(version)
cli.parse()