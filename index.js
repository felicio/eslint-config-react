'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: [
    '@strv/javascript/coding-styles/recommended',
    '@strv/javascript/environments/react/v15',
    '@strv/javascript/environments/react/optional',
  ],
  rules: {
    'react/prefer-stateless-function': 'off',
    'template-tag-spacing': ['error', 'never'],
    'no-inline-comments': 'off',
    'no-console': 'error',
  },
}
