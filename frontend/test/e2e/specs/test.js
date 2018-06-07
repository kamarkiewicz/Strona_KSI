// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

import server from "../server"

export default {
  before: (browser, done) => {
    server.start(done)
  },

  after: (browser) => {
    server.stop()
  },

  'default e2e tests': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home-page')
      .assert.elementPresent('#carousel1')
      .assert.elementCount('img', 11)
      .end()
  }
}
