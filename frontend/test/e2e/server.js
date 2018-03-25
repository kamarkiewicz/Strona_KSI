import { Nuxt, Builder } from "nuxt"
import { resolve } from "path"

const rootDir = resolve(__dirname, "../..")
const config = require(resolve(rootDir, "nuxt.config.js"))

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

export default {
  // Init Nuxt.js and start listening on localhost:4000
  start(done) {
    const host = process.env.HOST || "localhost"
    const port = process.env.PORT || 4000
    config.rootDir = rootDir // project folder
    config.dev = false // production build
    nuxt = new Nuxt(config)
    done()
    nuxt.listen(port, host)
  },

  stop() {
    nuxt.close()
  }
}
