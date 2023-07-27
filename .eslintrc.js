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
    'operator-linebreak': 'off' /* this conflicts with prettier */,
    'implicit-arrow-linebreak': 'off' /* this conflicts with prettier */,
  },
};
