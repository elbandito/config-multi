// note that we are using @heroku-cli/command instead of @oclif/command
// this inherits from @oclif/command but extends it with Heroku-specific functionality
import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'
import * as os from "os";

export default class MultiCommand extends Command {

  static description = 'Display config vars for specified Heroku apps';
  static args = [
    {name: 'apps'},
  ];

  static flags = {
    remote: flags.remote()
  };

  async run () {
    const {args} = this.parse(MultiCommand);

    args.apps.split(',').forEach(async (app: string) => {
      // https://devcenter.heroku.com/articles/platform-api-reference#config-vars
      let appConfigVarsResponse = await this.heroku.get<Heroku.App>(`/apps/${app}/config-vars`);

      console.log(`${app} Config Vars:`);
      console.log(appConfigVarsResponse.body);
      console.log(os.EOL);
    });
  }
}
