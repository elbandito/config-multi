import {expect, test} from '../../test'

describe('config:multi', () => {
  test
    .nock('https://api.heroku.com', api => api
      .get('/apps/mysterious-reef/config-vars')
      .reply(200, {NPM_CONFIG_PRODUCTION: false})
      .get('/apps/giggly-gorilla/config-vars')
      .reply(200, {RACK_ENV: 'production'})
    )
    .stdout()
    .command(['config:multi', 'mysterious-reef,giggly-gorilla'])
    .it('should display config vars', ctx => {
      expect(ctx.stdout).to.contain('NPM_CONFIG_PRODUCTION=false')
      expect(ctx.stdout).to.contain('RACK_ENV=production')
    })

  test
    .nock('https://api.heroku.com', api => api
      .get('/apps/unknown-unicorn/config-vars')
      .reply(404, {NPM_CONFIG_PRODUCTION: false})
    )
    .stderr()
    .command(['config:multi', 'unknown-unicorn'])
    .it('should inform user if app is not found', ctx => {
      expect(ctx.stderr).to.contain('Couldn\'t find application: \'unknown-unicorn\'')
    })
})
