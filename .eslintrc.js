module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest', 'react'],
  rules: {
    'operator-linebreak': 'off' /* this conflicts with prettier */,
    'implicit-arrow-linebreak': 'off' /* this conflicts with prettier */,
    'react/function-component-definition':
      'off' /* this doesn't make any sense to me, will revist */,
    'object-curly-newline': 'off' /* conflicts with desctructuring */,
  },
  overrides: [{ files: ['*.jsx', '*.js'] }],
};
