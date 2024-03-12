module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    collectCoverage: true,
    coverageReporters: ['html', 'text'],
    coverageDirectory: 'coverage/my-app',
  };
  