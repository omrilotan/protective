export default {
  rootDir: process.cwd(),
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: { '^.+\\.m?jsx?$': 'babel-jest' },
  transformIgnorePatterns: [], // Transpile everything including node_modules
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
