import {Command} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'

export default class MultiCommand extends Command {
  static description = 'display config vars for apps'
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

    await Promise.all(args.apps.split(',').map(async (app: string) => {
        try {
          const {body} = await this.heroku.get<Heroku.ConfigVars>(`/apps/${app}/config-vars`)
          this.printAppConfigVars(app, body)
        } catch (err) {
          if (err.http.statusCode === 404) this.appNotFound(app)
          else throw err
        }
      })
    )
  }

  private appNotFound(app: string) {
    this.warn(`Couldn't find application: '${app}'`)
    this.log()
  }

  private printAppConfigVars(app: string, configVars: any) {
    this.log(`${app} Config Vars:`)
    this.log('='.repeat(`${app} Config Vars:`.length))
    Object.keys(configVars).forEach((key: string) => {
      this.log(`${key}=${configVars[key]}`)
    })
    this.log()
  }
}
