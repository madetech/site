require('dotenv').config()

// Mock out images
const moduleNameMapper = {
  ".+\\.(jpg|png|svg)$": `<rootDir>/test/mocks/fileStub.js`,
}

// Run test setup script
const setupFilesAfterEnv = [
  "<rootDir>/test/setup.js"
]

// Ignore teats in all these paths
const testPathIgnorePatterns = [
  "<rootDir>/.cache/",
  "<rootDir>/cypress/",
  "<rootDir>/node_modules/",
  "<rootDir>/preview/",
  "<rootDir>/test/setup.js",
  "<rootDir>/test/support/",
]

if (process.env.SMOKE_ONLY) {
  console.info('Only running smoke tests as SMOKE_ONLY requested')
  testPathIgnorePatterns.push("<rootDir>/src/(.+).test.js")
}

if (!process.env.SMOKE_URL) {
  console.info('Ignoring smoke tests as no SMOKE_URL provided')
  testPathIgnorePatterns.push("<rootDir>/test/smoke/")
}

// Transform @madetech/frontend with babel
const transformIgnorePatterns = [
  "node_modules/(?!(@madetech/frontend)/)"
]

module.exports = {
  moduleNameMapper,
  setupFilesAfterEnv,
  testPathIgnorePatterns,
  transformIgnorePatterns
}
