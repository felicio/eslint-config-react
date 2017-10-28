'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: [
    '@strv/eslint-config-javascript/coding-styles/recommended',
    '@strv/eslint-config-javascript/environments/react/v15',
    '@strv/eslint-config-javascript/environments/react/optional',
  ],
  rules: {
    'react/prefer-stateless-function': 'off',
    'template-tag-spacing': ['error', 'never'],
    'no-inline-comments': 'off',
    'no-console': 'error',
  },
}
