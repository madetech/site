module.exports = {
  // Mock out images
  moduleNameMapper: {
    ".+\\.(jpg|png|svg)$": `<rootDir>/test/mocks/fileStub.js`,
  },

  // Run test setup script
  setupFilesAfterEnv: [
    "<rootDir>/test/setup.js"
  ],

  // Ignore teats in all these paths
  testPathIgnorePatterns: [
    "<rootDir>/.cache/",
    "<rootDir>/cypress/",
    "<rootDir>/node_modules/",
    "<rootDir>/preview/",
    "<rootDir>/test/setup.js",
    "<rootDir>/test/support/",
  ],

  // Transform @madetech/frontend with babel
  transformIgnorePatterns: ["node_modules/(?!(@madetech/frontend)/)"]
}
