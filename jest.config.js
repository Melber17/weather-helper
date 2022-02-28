const path = require('path')

module.exports = {
  "preset": "react-native",
  "setupFilesAfterEnv": [ "<rootDir>/jest.setup.js"],
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)"
  ]
}
