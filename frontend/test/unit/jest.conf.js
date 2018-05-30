import { resolve } from 'path'

export default {
  "rootDir": resolve(__dirname, "../../"),
  "verbose": true,
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "moduleNameMapper": {
    "^~/(.*)$": "<rootDir>/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "testPathIgnorePatterns": [
    "<rootDir>/test/e2e"
  ],
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  "coverageDirectory": "<rootDir>/test/unit/coverage",
  "collectCoverageFrom": [
    "components/**/*.{js,vue}",
    "layouts/**/*.{js,vue}",
    "pages/**/*.{js,vue}",
    "store/**/*.js",
    "plugins/**/*.{js,vue}",
    "middleware/**/*.{js,vue}",
    "!**/node_modules/**"
  ]
}
