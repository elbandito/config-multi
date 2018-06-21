import {Command} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'
import * as os from 'os'

export default class MultiCommand extends Command {
  static description = 'Display config vars for Heroku apps'
  static example = '$ heroku config:multi blooming-house-53,mysterious-dog-92'
  static args = [
    {
      name: 'apps',
      description: 'comma delimited list of applications',
      required: true
    },
  ]

  async run() {
    const {args} = this.parse(MultiCommand)

    for (const app of args.apps.split(',')) {
      try {
        const {body} = await this.heroku.get<Heroku.App>(`/apps/${app}/config-vars`)
        this.printAppConfigVars(app, body)
      } catch (err) {
        if (err.http.statusCode === 404) this.appNotFound(app)
      }
    }
  }

  private appNotFound(app: string) {
    this.log(`Couldn't find application: '${app}'`)
    this.log(os.EOL)
  }

  private printAppConfigVars(app: string, configVars: any) {
    this.log(`${app} Config Vars:`)
    this.log('===========================================')
    Object.keys(configVars).forEach((key: string) => {
      this.log(`${key}=${configVars[key]}`)
    })

    this.log(os.EOL)
  }
}
