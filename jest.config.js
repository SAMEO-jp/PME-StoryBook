const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/atoms$': '<rootDir>/src/components/atoms',
    '^@/components/molecules$': '<rootDir>/src/components/molecules',
    '^@/components/organisms$': '<rootDir>/src/components/organisms',
    '^@/components/templates$': '<rootDir>/src/components/templates',
    '^@/components/pages$': '<rootDir>/src/components/pages',
    '^@/features/(.*)$': '<rootDir>/src/features/$1',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
}

module.exports = createJestConfig(customJestConfig)
