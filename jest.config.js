module.exports = {
    preset: 'react-native',
    roots: ['app'],
    testMatch: ['<rootDir>/app/**/?(*.)test.{ts,tsx}'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    verbose: true,
    transformIgnorePatterns: [
        'node_modules/(?!@react-native|react-native)'
      ]
}