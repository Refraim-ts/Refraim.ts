import { cac } from 'cac'
import { version } from '../../package.json'
import { registerNewCommand } from './commands/new'
import { registerDevCommand } from './commands/dev'
import { registerMakeFeatureCommand } from './commands/make'

const cli = cac('refraim')

// 🎯 各コマンドを登録
registerNewCommand(cli)
registerDevCommand(cli)
registerMakeFeatureCommand(cli)
cli.help()
cli.version(version)
cli.parse()