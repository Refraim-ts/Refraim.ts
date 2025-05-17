import { cac } from 'cac'
import { version } from '../../package.json'
import { registerNewCommand } from './commands/new'
// 今後ここに他のコマンドも追加していきます
// import { registerMakeFeatureCommand } from './commands/makeFeature'

const cli = cac('refraim')

// 🎯 各コマンドを登録
registerNewCommand(cli)
// registerMakeFeatureCommand(cli)

cli.help()
cli.version(version)
cli.parse()