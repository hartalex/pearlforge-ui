module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'operator-linebreak': 'warn' /* this conflicts with prettier */,
    'implicit-arrow-linebreak': 'warn' /* this conflicts with prettier */,
  },
};
