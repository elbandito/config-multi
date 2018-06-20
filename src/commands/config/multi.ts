// note that we are using @heroku-cli/command instead of @oclif/command
// this inherits from @oclif/command but extends it with Heroku-specific functionality
import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'

export default class MultiCommand extends Command {

  static description = 'Display config vars for specified Heroku apps';

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  async run () {
    const {flags} = this.parse(MultiCommand);
    let app = await this.heroku.get<Heroku.App>(`/apps/${flags.app}`);

    console.dir(app)
  }
}
