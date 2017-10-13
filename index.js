'use strict'

module.exports = {
  extends: [
    '@strv/javascript/coding-styles/recommended',
    '@strv/javascript/environments/react/v15',
    '@strv/javascript/environments/react/optional',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'react/prefer-stateless-function': 'off',
    'template-tag-spacing': ['error', 'never'],
    'no-inline-comments': 'off',
    'no-console': 'error',
  },
}
