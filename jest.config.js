export default {
  testEnvironment: 'node',
  testMatch: ['**/*.test.mjs'],
  transform: {
    '^.+\\.m?js$': ['babel-jest', { presets: ['@babel/preset-env'] }],
  },
};
