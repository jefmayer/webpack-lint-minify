module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 'off',
    'no-constant-binary-expression': 'off',
    'no-unused-vars': 'off',
    'no-useless-catch': 'off',
    'react/jsx-key': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};