const reportPath = './.reports/packages/metric-units/';

export default {
  displayName: 'metric-units',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: `../../${reportPath}coverage`,
  coverageReporters: ['cobertura', 'html', 'lcov'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: reportPath,
        filename: 'test-report.html',
        pageTitle: 'Test',
        expand: true,
      },
    ],
    [
      'jest-junit',
      {
        outputDirectory: reportPath,
        outputName: 'test.junit.xml',
      },
    ],
  ],
};
