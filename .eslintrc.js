/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['./**/*.{ts,tsx}', '__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
